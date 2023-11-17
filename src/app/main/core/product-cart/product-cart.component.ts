import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {cartStore} from "../../../shared/store/cart/cart.store";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {

  constructor(private store: Store) {
    this.store.pipe(select(cartStore)).subscribe((state) => {
      console.log('ssssssssssssssssss', state);

    })
  }
}
