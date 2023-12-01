import {createSelector} from "@ngrx/store";
import {ProductsModel} from "../../api/models/products.model";

const productsStore = (state: any) => state?.products

export const allProductStoreList = createSelector(productsStore,
  (state: any) => state?.products)

export const rainProductStore = createSelector(allProductStoreList,
  (state) => state?.filter((product: ProductsModel) => product.type === 'rain'));

export const bestSellersProductStore = createSelector(allProductStoreList,
  (state) => state?.filter((product: ProductsModel) => !!product.bestSelleres))

export const weekendProductStore = createSelector(allProductStoreList,
  (state) => state?.filter((product: ProductsModel) => product.type === 'weekend'))

export const clogProductStore = createSelector(allProductStoreList,
  (state) => state?.filter((product: ProductsModel) => product.type === 'clog'))

export const snowProductStore = createSelector(allProductStoreList,
  (state) => state?.filter((product: ProductsModel) => product.type === 'snow'))


