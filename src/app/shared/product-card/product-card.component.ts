import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AddCartAction, UpdateCartAction} from "../store/cart/cart.action";
import {ToastService} from "../../main/core/toast/service/toast.service";
import {LocalStorageService} from "../api/localstorage.service";


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
              private localStorageService: LocalStorageService) {
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
    const sizeFormControl = this.sizeControl().value;
    const convertSize = +sizeFormControl;

    const getProductFromLocalStorage = this.localStorageService.getLocalStorageItem('entities');

    const getProductValues = Object.values(getProductFromLocalStorage) as ProductsModel[];

    if (!getProductValues.length) {
      const mappedProduct = {
        ...product,
        size: [convertSize],
        count: 1
      }
      this.store.dispatch(new AddCartAction(mappedProduct));
      this.toastService.addToast('Product added to cart');
    }

    let isUpdated = true;

    //change the product quantity if the product is already added to the card
    getProductValues.filter((prod) =>
      (product.id === prod.id || prod.productId === product.id)
      && prod.size[0] === convertSize)
      .map((prod) => {

        isUpdated = false
        const productForUpdate = {
          id: prod.id,
          changes: {
            count: prod.count += 1,
          }
        }
        this.toastService.addToast('Product count changed');
        this.store.dispatch(new UpdateCartAction(productForUpdate));
      })


    // generate a new ID if a new size is added for the same product
    if (isUpdated) {

      const filteredValue = getProductValues.filter((prod) => prod.size[0] !== convertSize)

      if (filteredValue.length > 0) {

        const getId = this.generateRandomId(Object.keys(getProductFromLocalStorage))
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
    }

  }

  private generateRandomId(keys: string[]): number {
    const generateId = Math.floor(Math.random() * 500) + 50;
    const convertKeys = keys.map((num) => Number(num));

    const isUniq = convertKeys.every((num) => num !== generateId)

    // if id is not uniq call method again else return generateId
    return isUniq ? generateId : this.generateRandomId(keys);
  }

}

