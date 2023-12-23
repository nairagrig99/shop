import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AddCartAction, UpdateCartAction} from "../store/cart/cart.action";
import {ToastService} from "../../main/core/toast/service/toast.service";
import {LocalStorageService} from "../api/localstorage.service";
import {Router} from "@angular/router";
import {ProductService} from "./service/product.service";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductsModel;

  public form!: FormGroup;

  constructor(private formGroup: FormBuilder,
              private store: Store,
              private toastService: ToastService,
              private localStorageService: LocalStorageService,
              private productCartService: ProductService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.form = this.initForm();
    this.sizeControl()?.setValue(this.product.size[0]);
  }

  private sizeControl(): FormControl {
    return this.form.get("sizes") as FormControl
  }

  private initForm(): FormGroup {
    return this.formGroup.group({
      sizes: null
    })
  }

  public addProductToBasket(product: ProductsModel): void {

    const convertSize = Number(this.sizeControl().value);

    const getProductFromLocalStorage = this.localStorageService.getLocalStorageItem('entities');

    const getProductValues = Object.values(getProductFromLocalStorage) as ProductsModel[];

    const isUniqProducts = getProductValues.every((prod) => prod.id !== product.id);

    if ((!getProductValues.length || isUniqProducts) && convertSize === 36) {

      const mappedProduct = {
        ...product,
        size: [convertSize],
        count: 1
      }
      this.store.dispatch(new AddCartAction(mappedProduct));
      this.toastService.addToast('Product added to cart');
      return;
    }

    const isCountChanged = this.updateProductCount(getProductValues, product, convertSize);

    // generate a new ID if a new size is added for the same product
    if (!isCountChanged) {
      this.createNewProductWithChangedSize(product, convertSize, getProductFromLocalStorage)
    }
  }

  private createNewProductWithChangedSize(
    product: ProductsModel,
    convertSize: number,
    getProductFromLocalStorage: {}): void {

      const getId = this.productCartService.generateRandomId(Object.keys(getProductFromLocalStorage))
      const createNewProduct: ProductsModel = {
        ...product,
        id: getId,
        productId: product.id,
        count: 1,
        size: [convertSize]
      }
      this.store.dispatch(new AddCartAction(createNewProduct));

      this.toastService.addToast('Product added to cart');
  }

  //change the product quantity if the product is already added to the card
  private updateProductCount(
    getProductValues: ProductsModel[],
    product: ProductsModel,
    convertSize: number): boolean {

    return getProductValues.filter((prod) =>
      (product.id === prod.id || prod.productId === product.id)
      && prod.size[0] === convertSize)
      .some((prod) => {

        const productForUpdate = {
          id: prod.id,
          changes: {
            count: ++prod.count,
          }
        }

        this.toastService.addToast('Product count changed');
        this.store.dispatch(new UpdateCartAction(productForUpdate));
        return true;
      })
  }

  public openProduct(id: number): void {
    this.route.navigate([`main/product/${id}`]);
  }

}

