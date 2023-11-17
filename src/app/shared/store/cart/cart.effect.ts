import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AddCartActionSuccess, CartAction, GetCartAction, GetCartActionSuccess} from "./cart.action";
import {switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()

export class CartEffect {
  constructor(private action$: Actions) {
  }

// @ts-ignore
  cartEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(CartAction.GetCartProducts),
      // switchMap(() => {
      //   return localStorage.getItem('cart')
      // }),
      map((request) => {
        console.log('request', request);
        return new GetCartActionSuccess(request)
      })
    )
  })


}
