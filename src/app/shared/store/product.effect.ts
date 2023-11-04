import {Injectable} from "@angular/core";
import {ProductsAction, ProductsActionGetSuccess} from "./products.action";
import {ProductsApiService} from "../api/products-api.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()

export class ProductEffect {
  constructor(private action$: Actions, private productsApiService: ProductsApiService) {
  }

  public getProductsList$ = createEffect(() => this.action$.pipe(
      ofType(ProductsAction.Get),
      switchMap(() => {
          return this.productsApiService.getProductList().pipe(
            map((request) => {
              return new ProductsActionGetSuccess(request["products"])
            })
          )
        }
      )
    ) as any
  )


}

