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
import {ActionReducer, MetaReducer, StoreModule} from "@ngrx/store";
import {cartReducer, initialState} from "../shared/store/cart/cart.reducer";
import {localStorageSync} from "ngrx-store-localstorage";
import {ProductCartComponent} from "./core/product-cart/product-cart.component";
import {ProductCartItemComponent} from './core/product-cart/product-cart-item/product-cart-item.component';
import {ProductCartService} from "./core/product-cart/service/product-cart.service";
import {ToastComponent} from './core/toast/toast.component';
import {RainSortComponent} from './components/rain-sort/rain-sort.component';
import {WeekendSortComponent} from './components/weekend-sort/weekend-sort.component';
import {AllShopComponent} from "./components/all-shop/all-shop.component";
import {SnowSortComponent} from "./components/snow-sort/snow-sort.component";

const route: Routes = [
  {path: '', redirectTo: 'best-selling', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'best-selling', component: BestSellersComponent},
      {path: 'cart', component: ProductCartComponent},
      {path: 'rain', component: RainSortComponent},
      {path: 'weekend', component: WeekendSortComponent},
      {path: 'all-shops', component: AllShopComponent},
      {path: 'snow', component: SnowSortComponent},
    ]
  }
]


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['entities'], rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    MainComponent,
    AllShopComponent,
    SnowSortComponent,
    MainNavComponent,
    FooterComponent,
    HeaderComponent,
    BestSellersComponent,
    ProductCartComponent,
    ProductCartItemComponent,
    ToastComponent,
    RainSortComponent,
    WeekendSortComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    StoreModule.forFeature('entities', cartReducer, {
      metaReducers: metaReducers,
      initialState: initialState
    }),
    RouterModule.forChild(route)],
  exports: [
    ToastComponent
  ],
  providers: [ProductCartService]
})
export class MainModule {
}
