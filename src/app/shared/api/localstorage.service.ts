import {Injectable} from "@angular/core";
import {ProductsModel} from "./models/products.model";

@Injectable()

export class LocalStorageService {

  public getLocalStorageItem(title: string): any {
    return JSON.parse(localStorage.getItem(title) || '{}');
  }

  public setLocalStorageItem(title: string, item: ProductsModel): void {
    localStorage.setItem(title, JSON.stringify(item));
  }
}
