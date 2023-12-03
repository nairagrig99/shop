import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ProductsModel} from "../../../shared/api/models/products.model";
import {select, Store} from "@ngrx/store";
import {allProductStoreList} from "../../../shared/store/product/products.store";

@Component({
  selector: 'app-all-shop',
  templateUrl: './all-shop.component.html',
  styleUrls: ['./all-shop.component.scss']
})
export class AllShopComponent {
  public products$: Observable<ProductsModel[]> = this.store.pipe(select(allProductStoreList));

  constructor(private store: Store) {
  }
}
