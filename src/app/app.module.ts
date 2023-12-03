import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ActionReducer, MetaReducer, StoreModule} from "@ngrx/store";
import {productReducer} from "./shared/store/product/product.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffect} from "./shared/store/product/product.effect";
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from "../environment/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {localStorageSync} from "ngrx-store-localstorage";

import {MainModule} from "./main/main.module";
import {ToastService} from "./main/core/toast/service/toast.service";

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['products']})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// const reducers: ActionReducerMap<any, any> = [productReducer, cartReducer]

// export function localStorageSyncCartReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({keys: ['cart']})(reducer);
// }
//
// const metaReducersCart: Array<MetaReducer<any, any>> = [localStorageSyncCartReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('products', productReducer),
        EffectsModule.forRoot([ProductEffect]),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        environment.production ? StoreDevtoolsModule.instrument() : [],
        MainModule
    ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
