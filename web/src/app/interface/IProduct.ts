import {IPromotion} from "./IPromotion";
import {IProductType} from "./IProductType";
import {IEvaluate} from "./IEvaluate";

export interface IProduct {
  idProduct: number;
  productName: String;
  price: number;
  quantity: number;
  avt: string;
  screen: String;
  hdh: String;  
  cameraT: String;
  cpu: String;
  ram: String;
  rom: String;
  sdCard: String;
  pin: String;
  numOfStar:number;
  numOfReview: number;
  status: number;
  promotion: IPromotion;
  productType: IProductType;
  evaluates: IEvaluate[];
}
