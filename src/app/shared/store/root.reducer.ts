import {ActionReducerMap} from "@ngrx/store";
import {productReducer} from "./product/product.reducer";
import {cartReducer} from "./cart/cart.reducer";

export const rootReducers = {
  products: productReducer,
  cart: cartReducer
}
