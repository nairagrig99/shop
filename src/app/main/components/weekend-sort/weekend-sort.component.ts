import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {rainProductStore, weekendProductStore} from "../../../shared/store/product/products.store";

@Component({
  selector: 'app-weekend-sort',
  templateUrl: './weekend-sort.component.html',
  styleUrls: ['./weekend-sort.component.scss']
})
export class WeekendSortComponent {

  public products$ = this.store.pipe(select(weekendProductStore))

  constructor(private store: Store) {
  }

}
