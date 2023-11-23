export interface ProductsModel {
  id: number;
  title: string;
  description: string;
  price: string;
  size: number[],
  reviews: number;
  type: string;
  bestSelleres: boolean;
  image: string[];
  count:number;
}
