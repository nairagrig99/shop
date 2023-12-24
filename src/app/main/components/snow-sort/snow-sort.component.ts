import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {rainProductStore, snowProductStore} from "../../../shared/store/product/products.store";

@Component({
  selector: 'app-snow-sort',
  templateUrl: './snow-sort.component.html',
  styleUrls: ['./snow-sort.component.scss']
})
export class SnowSortComponent {

  public products$ = this.store.pipe(select(snowProductStore))

  constructor(private store: Store) {
    this.products$.subscribe()
  }
}
