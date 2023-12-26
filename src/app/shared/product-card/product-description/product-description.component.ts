import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {allProductStoreList} from "../../store/product/products.store";
import {map} from "rxjs/operators";
import {ProductsModel} from "../../api/models/products.model";
import {Update} from "@ngrx/entity";
import {AddCartAction, UpdateCartAction} from "../../store/cart/cart.action";
import {LocalStorageService} from "../../api/localstorage.service";
import {ProductService} from "../service/product.service";
import {ToastService} from "../../../main/core/toast/service/toast.service";
import {ChangeSelectedProductCountEnum} from "../../enums/change-selected-product-count.enum";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  public productId: string | null;
  public product: ProductsModel;
  public selectedProductCount: number = 1;
  public changeSelectedCount = ChangeSelectedProductCountEnum;

  private defaultSize = 36;
  private size: number = this.defaultSize;

  constructor(private router: ActivatedRoute,
              private store: Store,
              private localStorageService: LocalStorageService,
              private productCartService: ProductService,
              private toastService: ToastService) {

    this.productId = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getAllProductsList();
  }

  private getAllProductsList(): void {
    this.store.pipe(select(allProductStoreList))
      .pipe(map((prod) => prod)).subscribe((product) => {

      for (const productkey in product) {
        if (product[productkey].id === Number(this.productId)) {
          this.product = product[productkey]
        }
      }
    })
  }

  public chooseSize(size: number): void {
    this.size = size;
  }

  public changeSelectedProductCount(productId: number, type: string): void {

    if (type === this.changeSelectedCount.INCREMENT) {
      this.selectedProductCount++;
    } else if (type === this.changeSelectedCount.DECREMENT && this.selectedProductCount > 1) {
      this.selectedProductCount--;
    }

    const updateCount: Update<ProductsModel> = {
      id: productId,
      changes: {
        count: this.selectedProductCount
      }
    }

    this.store.dispatch(new UpdateCartAction(updateCount))
  }

  public addProductToBasket(product: ProductsModel): void {

    const getProductFromLocalStorage = this.localStorageService.getLocalStorageItem('entities');

    const getProductValues = Object.values(getProductFromLocalStorage) as ProductsModel[];

    const isUniqProducts = getProductValues.every((prod) => prod.id !== product.id);

    if (!getProductValues.length || isUniqProducts) {
      const mappedProduct = {
        ...product,
        size: [this.size],
        count: 1
      }
      this.store.dispatch(new AddCartAction(mappedProduct));
      this.toastService.addToast('Product added to cart');
      return;
    }

    const isCountChanged = this.updateProductCount(getProductValues, product);

    // generate a new ID if a new size is added for the same product
    if (!isCountChanged) {
      this.createNewProductWithChangedSize(product, getProductFromLocalStorage)
    }
  }


  private createNewProductWithChangedSize(
    product: ProductsModel,
    getProductFromLocalStorage: {}): void {

      const getId = this.productCartService.generateRandomId(Object.keys(getProductFromLocalStorage))
      const createNewProduct: ProductsModel = {
        ...product,
        id: getId,
        productId: product.id,
        count: 1,
        size: [this.size]
      }
      this.store.dispatch(new AddCartAction(createNewProduct));

      this.toastService.addToast('Product added to cart');

  }

  //change the product quantity if the product is already added to the card
  private updateProductCount(
    getProductValues: ProductsModel[],
    product: ProductsModel): boolean {

    return getProductValues.filter((prod) =>
      (product.id === prod.id || prod.productId === product.id)
      && prod.size[0] === this.size)
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


}
