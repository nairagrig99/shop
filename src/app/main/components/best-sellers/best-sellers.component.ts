import {Component, OnInit} from '@angular/core';
import {ProductsApiService} from "../../../shared/api/products-api.service";
import {select, Store} from "@ngrx/store";
import {ProductsActionGet} from "../../../shared/store/products.action";
import {Observable} from "rxjs";
import {
  bestSellersProductStore,
} from "../../../shared/store/products.store";
import {ProductsModel} from "../../../shared/api/models/products.model";

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})

export class BestSellersComponent implements OnInit {
  public products$: Observable<ProductsModel[]> = this.store.pipe(select(bestSellersProductStore));

  constructor(private service: ProductsApiService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductsActionGet())

    // this.products$ =
  }
}
