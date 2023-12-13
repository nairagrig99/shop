import {Injectable} from "@angular/core";

@Injectable()

export class ProductService {

  public generateRandomId(keys: string[]): number {
    const generateId = Math.floor(Math.random() * 500) + 50;
    const convertKeys = keys.map((num) => Number(num));

    const isUniq = convertKeys.every((num) => num !== generateId)

    // if id is not uniq call method again else return generateId
    return isUniq ? generateId : this.generateRandomId(keys);
  }
}
