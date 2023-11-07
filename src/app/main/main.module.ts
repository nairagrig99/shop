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

const route: Routes = [
  {path: '', redirectTo: 'best-selling', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'best-selling', component: BestSellersComponent}
    ]
  }
]

@NgModule({
  declarations: [MainComponent, MainNavComponent, FooterComponent, HeaderComponent, BestSellersComponent],

  imports: [CommonModule, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule, RouterModule.forChild(route)]
})
export class MainModule {
}
