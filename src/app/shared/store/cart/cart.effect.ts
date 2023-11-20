import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CartAction, GetCartActionSuccess} from "./cart.action";
import {of, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {LocalStorageService} from "../../api/localstorage.service";

@Injectable()

export class CartEffect {
  constructor(private action$: Actions, private localService: LocalStorageService) {
  }

// @ts-ignore
  cartEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(CartAction.GetCartProducts),
      switchMap(() => {
        return of(this.localService.getLocalStorageItem('cart'))
      }),
      map((request) => {
        console.log('request', request);
        return new GetCartActionSuccess(request)
      })
    )
  })


}
