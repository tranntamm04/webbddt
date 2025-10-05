import {IProductDTO} from "./IProductDTO";
import {AccountDTO} from "./AccountDTO";
import {IAccountCustomer} from "./IAccountCustomer";

export interface Evaluates {
  id:any;
  product: IProductDTO;
  customer:IAccountCustomer;
  numberOfStar: number;
  comment:string;
  dateFounded: Date;
} 
