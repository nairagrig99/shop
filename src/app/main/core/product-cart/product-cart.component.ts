import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {cartStore} from "../../../shared/store/cart/cart.store";
import {ProductsModel} from "../../../shared/api/models/products.model";
import {ProductCartService} from "./service/product-cart.service";


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  public carts: ProductsModel[];

  constructor(private store: Store,
              private cartService: ProductCartService) {}

  ngOnInit(): void {
    this.store.pipe(select(cartStore)).subscribe((cart) => {
      this.carts = Object.values(cart["entities"]);
    })
  }

  public subTotal() {
    const productPriceConvert = this.carts.map((cart) => {
      return this.cartService.productTotal(cart.price, cart.count);
    })
    const countOfTotal = productPriceConvert.map((num) => Number(num))
      .reduce((acc, next) => acc + next);

    return this.cartService.numberFormatter(countOfTotal)
  }


}


