import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AddCartAction} from "../store/cart/cart.action";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductsModel;

  public form!: FormGroup;

  constructor(private formGroup: FormBuilder,
              private store: Store) {
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
    const convertSizeFromStingToNumber = +sizeFormControl;

    if (!!(convertSizeFromStingToNumber)) {
      const mappedProduct = {
        ...product,
        size: [+convertSizeFromStingToNumber],
        count: 1
      }
      this.store.dispatch(new AddCartAction(mappedProduct));
    }
  }



}
