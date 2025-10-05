import {IBill} from "./IBill";
import {IProduct} from "./IProduct";

export interface IContractDetail {
  id: number;
  bill: IBill;
  product: IProduct;
  quantity: number;
  price: number;
} 
