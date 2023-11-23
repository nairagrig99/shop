import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";

import {LocalStorageService} from "../../api/localstorage.service";

@Injectable()

export class CartEffect {
  constructor(private action$: Actions, private localService: LocalStorageService) {
  }

// @ts-ignore
//   cartEffect$ = createEffect(() => {
//     return this.action$.pipe(
//       // ofType(CartAction.GetCartProducts),
//       switchMap(() => {
//         return of(this.localService.getLocalStorageItem('cart'))
//       }),
//       map((request) => {
//         console.log('request', request);
//         return new GetCartActionSuccess(request)
//       })
//     )
//   })


}
