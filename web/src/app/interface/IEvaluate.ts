import {IProduct} from "./IProduct";

export interface IEvaluate {
  idEvaluate: number;
  numberOfStar: number;
  comment: String;
  dateFounded: String;
  product: IProduct;
}
 