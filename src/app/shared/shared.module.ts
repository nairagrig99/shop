import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductReviewComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatIconModule
    ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule {
}
