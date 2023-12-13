import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductReviewComponent} from './product-review/product-review.component';
import {MatIconModule} from "@angular/material/icon";
import {SelectComponent} from './select/select.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from './button/button.component';
import {LocalStorageService} from "./api/localstorage.service";
import {ProductService} from "./product-card/service/product.service";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductReviewComponent,
    SelectComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ProductCardComponent,
    ProductReviewComponent
  ],
  providers: [LocalStorageService,ProductService]
})
export class SharedModule {
}
