import {ProductsAction, ProductsActionType} from "./products.action";
import {ProductsModel} from "../../api/models/products.model";
import {State} from "@ngrx/store";

export interface ProductState {
  products: ProductsModel | null
}

// // @ts-ignore
export const initialState: ProductState = {
  products: null
}

// @ts-ignore

export const productReducer = (state: ProductState = initialState, action: ProductsActionType) => {
  switch (action.type) {

    case ProductsAction.GetSuccess:
      return {
        ...state,
        products: action.payload
      }
    case ProductsAction.GetError:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}
