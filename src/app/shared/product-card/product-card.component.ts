import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../api/models/products.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductsModel;

  ngOnInit(): void {

  }
}
