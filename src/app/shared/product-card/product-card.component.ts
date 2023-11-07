import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductsModel;

  public form!: FormGroup;

  constructor(private formGroup: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.initForm();
    this.sizeControl()?.setValue([...this.product.size]);
    // this.sizeControl()?.valueChanges.subscribe((s)=>{
    //   console.log('ssssssssssss', this.sizeControl())
    // })
  }

  private sizeControl(): FormArray {
    return this.form.get("sizes") as FormArray
  }

  private initForm(): FormGroup {
    return this.formGroup.group({
      sizes: []
    })
  }


}
