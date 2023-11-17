import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AddCartAction} from "../store/cart/cart.action";
import {LocalStorageService} from "../api/localstorage.service";
import {LocalStorageItemEnum} from "../enums/local-storage-item.enum";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductsModel;

  public form!: FormGroup;
  private localItemEnum = LocalStorageItemEnum;

  constructor(private formGroup: FormBuilder,
              private store: Store,
              private localStorage: LocalStorageService) {
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

    if (!!(+sizeFormControl)
    ) {
      const mappedProduct = {
        ...product,
        size: [+sizeFormControl]
      }
      this.store.dispatch(new AddCartAction(mappedProduct))

      const getCart = this.localStorage.getLocalStorageItem(this.localItemEnum.CART);

      const getEntity = this.localStorage.getLocalStorageItem(this.localItemEnum.ENTITIES);

      const cartKeys = Object.keys(getCart);
      const entityKeys = Object.keys(getEntity);

      delete getEntity['undefined'];

      if (cartKeys.length > entityKeys.length) {
        cartKeys.forEach((key, index) => {
          if (key !== entityKeys[index]) {
            const copyEntity = Object.assign(getCart, getEntity);
            this.localStorage.setLocalStorageItem(this.localItemEnum.CART, copyEntity)
          }
        })
      } else {
        this.localStorage.setLocalStorageItem(this.localItemEnum.CART, getEntity)
      }
    }

  }


}
