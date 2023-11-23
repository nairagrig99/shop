import {Injectable} from "@angular/core";

@Injectable()

export class ProductCartService {

  public productTotal(price: string,count: number): number {

    const convertPriceToNumber = price.split('')
      .filter((str, index, array) => str !== '.' && str !== ',' && index < array.length - 2).join('');

    return count * Number(convertPriceToNumber);
  }

  public numberFormatter(total: number): string {
    const numberFormatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return numberFormatter.format(total);
  }
}
