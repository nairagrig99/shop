import {Action} from "@ngrx/store";
import {ProductsModel} from "../api/models/products.model";

export enum ProductsAction {
  Get = '[Products] Get',
  GetSuccess = '[Products] GetSuccess',
  GetError = '[Products] GetError',
}

export class ProductsActionGet implements Action {
  readonly type = ProductsAction.Get
}

export class ProductsActionGetSuccess implements Action {
  readonly type = ProductsAction.GetSuccess

  constructor(public payload: ProductsModel) {}
}

export class ProductsActionGetError implements Action {
  readonly type = ProductsAction.GetError

  constructor(public payload: string) {
  }
}

export type ProductsActionType = ProductsActionGet | ProductsActionGetSuccess | ProductsActionGetError;
