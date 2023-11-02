import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ProductsModel} from "./models/products.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";

@Injectable({
  providedIn: "root"
})
export class ProductsApiService {

  constructor(private _http: HttpClient) {
  }

  public getProductList(): Observable<any> {
    return this._http.get<ProductsModel>(environment.baseUrl);
  }
}
