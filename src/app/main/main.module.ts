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
import {AllShopComponent} from "./components/all-shop/all-shop.component";
import {FooterComponent} from './core/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';

const route: Routes = [
  {path: '', redirectTo: 'best-selling', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'best-selling', component: AllShopComponent}
    ]
  }
]

@NgModule({
  declarations: [MainComponent, MainNavComponent, FooterComponent, HeaderComponent],

  imports: [CommonModule, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, RouterModule.forChild(route)],
})
export class MainModule {
}
