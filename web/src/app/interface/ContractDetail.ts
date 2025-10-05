import {IProductDTO} from "./IProductDTO";

export interface ContractDetail {
  id:any;
  idBill: number;
  idProduct: number;
  price: number;
  quantity: number;
  product:IProductDTO;
}
 