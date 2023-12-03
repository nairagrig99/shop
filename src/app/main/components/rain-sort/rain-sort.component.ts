import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {rainProductStore} from "../../../shared/store/product/products.store";

@Component({
  selector: 'app-rain-sort',
  templateUrl: './rain-sort.component.html',
  styleUrls: ['./rain-sort.component.scss']
})
export class RainSortComponent {

  public products$ = this.store.pipe(select(rainProductStore))

  constructor(private store: Store) {
    this.products$.subscribe((s)=>{console.log('sssssssssssss',s)})
  }
}
