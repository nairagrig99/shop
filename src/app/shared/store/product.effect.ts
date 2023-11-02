import {Injectable} from "@angular/core";
import {ProductsAction, ProductsActionGetError, ProductsActionGetSuccess} from "./products.action";
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
          console.log('effect')
          return this.productsApiService.getProductList().pipe(
            map((request) => {
              console.log('request', request)
              return new ProductsActionGetSuccess(request["products"])
            })
          )
        }
      )
    ) as any
  )


}

// export class ConsiderationTypesEffects {
//   constructor(private actions$: Actions, private dictionaryApi: DictionaryApiService) {}
//
//   @Effect()
//   GetConsiderationTypes$: Observable<ConsiderationTypesAction> = this.actions$.pipe(
//     ofType(ConsiderationTypesActionTypes.Get),
//     throttleTime(CACHE_TIME),
//     switchMap(() =>
//       this.dictionaryApi.getAgendaPackageTypes().pipe(
//         map((response) => new ConsiderationTypesGetSuccess(response)),
//         catchError((err) => of(new ConsiderationTypesGetError()))
//       )
//     )
//   );
// }
