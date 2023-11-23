import {Component, Input, OnInit} from '@angular/core';
import {ProductsModel} from "../../../../shared/api/models/products.model";
import {Update} from "@ngrx/entity";
import {RemoveCartAction, UpdateCartAction} from "../../../../shared/store/cart/cart.action";
import {Store} from "@ngrx/store";
import {ProductCartService} from "../service/product-cart.service";
import {ChangeSelectedProductCountEnum} from "../../../../shared/enums/change-selected-product-count.enum";

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.scss']
})
export class ProductCartItemComponent implements OnInit {

  @Input() cart: ProductsModel;
  public selectedProductCount: number;
  public changeSelectedCount = ChangeSelectedProductCountEnum;

  constructor(private store: Store,
              private cartService: ProductCartService) {
  }

  ngOnInit(): void {
    this.selectedProductCount = this.cart.count;
  }

  public changeSelectedProductCount(cart: ProductsModel, type: string): void {

    if (type === this.changeSelectedCount.INCREMENT) {
      this.selectedProductCount++;
    } else if (type === this.changeSelectedCount.DECREMENT && this.selectedProductCount > 1) {
      this.selectedProductCount--;
    }

    const updateCount: Update<ProductsModel> = {
      id: cart.id,
      changes: {
        count: this.selectedProductCount
      }
    }

    this.store.dispatch(new UpdateCartAction(updateCount))
  }

  public productTotal(price: string): string {
    const getTotal = this.cartService.productTotal(price, this.selectedProductCount);
    return this.cartService.numberFormatter(getTotal);
  }

  public removeProductFromCart(id: number) {
    this.store.dispatch(new RemoveCartAction(id))
  }

}

