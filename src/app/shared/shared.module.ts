import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ProductsApiService} from "./api/products-api.service";
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule {
}
