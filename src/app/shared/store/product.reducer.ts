import {ProductsAction, ProductsActionType} from "./products.action";
import {ProductsModel} from "../api/models/products.model";
import {State} from "@ngrx/store";

export interface ProductState {
  products: ProductsModel
}

export const initialState = {
  products: null
}

export const productReducer = (state: State<ProductState>, action: ProductsActionType) => {
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
