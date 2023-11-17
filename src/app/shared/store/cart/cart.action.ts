import {Action} from "@ngrx/store";
import {ProductsModel} from "../../api/models/products.model";

export enum CartAction {
  GetCartProducts = '[Basket] Get Basket Products',
  GetCartProductsSuccess = '[Basket] Get Basket Products ',
  AddProductsToCart = '[Basket] Add Products To Basket',
  AddProductsToCartSuccess = '[Basket] Add Products To Basket Success',
}

export class GetCartAction implements Action {
  readonly type = CartAction.GetCartProducts
}

export class GetCartActionSuccess implements Action {
  readonly type = CartAction.GetCartProductsSuccess

  constructor(public payload: ProductsModel) {
  }
}

export class AddCartAction implements Action {
  readonly type = CartAction.AddProductsToCart;
  constructor(public payload: ProductsModel ) {
  }

}

export class AddCartActionSuccess implements Action {
  readonly type = CartAction.AddProductsToCartSuccess;

  constructor(public payload: ProductsModel) {}

}

export type CartActionType = GetCartAction | AddCartAction | GetCartActionSuccess | AddCartActionSuccess;
