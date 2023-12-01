import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductsActionGet} from "../shared/store/product/products.action";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private store: Store) {
    store.dispatch(new ProductsActionGet())
  }

}
