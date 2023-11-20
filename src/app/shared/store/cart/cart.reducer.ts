import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {ProductsModel} from "../../api/models/products.model";
import {CartAction, CartActionType} from "./cart.action";

export const cartAdapter = createEntityAdapter<ProductsModel>({
  selectId: (cart) => cart.id,
  sortComparer: false
});

const defaultState = {
  entities: {},
  ids: [],
}

export const initialState: EntityState<ProductsModel> = cartAdapter.getInitialState(defaultState);

export function cartReducer(
  state: EntityState<ProductsModel> = initialState,
  action: CartActionType
) {
  switch (action.type) {
    case CartAction.AddProductsToCart:
      return cartAdapter.addOne(action.payload, state)
    default : {
      return state;
    }

  }
}
