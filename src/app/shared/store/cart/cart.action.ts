import {Action} from "@ngrx/store";
import {ProductsModel} from "../../api/models/products.model";
import {Update} from "@ngrx/entity";

export enum CartAction {
  UpdateCartProducts = '[Cart] Update Basket Products',
  GetCartProductsSuccess = '[Cart] Get Basket Products ',
  AddProductsToCart = '[Cart] Add Products To Basket',
  AddProductsToCartSuccess = '[Cart] Add Products To Basket Success',
  RemoveProductFromCart = '[Cart] Remove Product From Cart'
}


export class GetCartActionSuccess implements Action {
  readonly type = CartAction.GetCartProductsSuccess

  constructor(public payload: ProductsModel) {
  }
}

export class AddCartAction implements Action {
  readonly type = CartAction.AddProductsToCart;

  constructor(public payload: ProductsModel) {
  }

}

export class AddCartActionSuccess implements Action {
  readonly type = CartAction.AddProductsToCartSuccess;

  constructor(public payload: ProductsModel) {
  }

}

export class UpdateCartAction implements Action {
  readonly type = CartAction.UpdateCartProducts

  constructor(public payload: Update<ProductsModel>) {
  }
}

export class RemoveCartAction implements Action {
  readonly type = CartAction.RemoveProductFromCart;

  constructor(public payload: number) {
  }

}

export type CartActionType =
  UpdateCartAction
  | AddCartAction
  | GetCartActionSuccess
  | AddCartActionSuccess
  | RemoveCartAction;
