import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductsModel;

  public form!: FormGroup;

  constructor(private formGroup: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.initForm();

    this.sizeControl()?.setValue(this.product.size[0]);

    // this.sizeControl().valueChanges.subscribe((s)=>{
    //   console.log('control changes',  this.sizeControl())
    // })
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
    if (!!(+sizeFormControl)) {
      const newProduct = {
        ...product,
        size: [+sizeFormControl]
      }
    }

  }


}
