import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {MainNavComponent} from "./core/main-nav/main-nav.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {FooterComponent} from './core/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';
import {BestSellersComponent} from './components/best-sellers/best-sellers.component';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActionReducer, INITIAL_STATE, MetaReducer, StoreModule} from "@ngrx/store";
import {cartReducer, initialState} from "../shared/store/cart/cart.reducer";
import {localStorageSync} from "ngrx-store-localstorage";
import {EffectsModule} from "@ngrx/effects";
import {CartEffect} from "../shared/store/cart/cart.effect";
import {ProductCartComponent} from "./core/product-cart/product-cart.component";
import { ProductCartItemComponent } from './core/product-cart/product-cart-item/product-cart-item.component';
import {ProductCartService} from "./core/product-cart/service/product-cart.service";

const route: Routes = [
  {path: '', redirectTo: 'best-selling', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'best-selling', component: BestSellersComponent},
      {path: 'cart', component: ProductCartComponent},
    ]
  }
]

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['entities'], rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [MainComponent, MainNavComponent, FooterComponent, HeaderComponent, BestSellersComponent, ProductCartComponent, ProductCartItemComponent],

  imports: [CommonModule, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('entities', cartReducer, {
      metaReducers: metaReducers,
      initialState: initialState
    }),
    MatListModule, RouterModule.forChild(route)],
  providers:[ProductCartService]
})
export class MainModule {
}
