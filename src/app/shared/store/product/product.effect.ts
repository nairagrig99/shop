import {Injectable} from "@angular/core";
import {ProductsAction, ProductsActionGetSuccess} from "./products.action";
import {ProductsApiService} from "../../api/products-api.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {filter, of, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {LocalStorageService} from "../../api/localstorage.service";

@Injectable()

export class ProductEffect {
  constructor(private action$: Actions,
              private productsApiService: ProductsApiService,
              private localStorageService: LocalStorageService) {
  }

  public getProductsList$ = createEffect(() => this.action$.pipe(
      ofType(ProductsAction.Get),
      switchMap(() => {
          const productFromLocalStrg = this.localStorageService.getLocalStorageItem('products')
          const objs = Object.keys(productFromLocalStrg);
          if (objs?.length > 0) {
            return of(this.localStorageService.getLocalStorageItem('products')).pipe(
              filter((product) => !!product),
              map((request) => {
                return new ProductsActionGetSuccess(request)
              })
            )
          } else {
            return this.productsApiService.getProductList().pipe(
              map((request) => {
                return new ProductsActionGetSuccess(request["products"])
              })
            )
          }
        }
      )
    ) as any
  )


}

