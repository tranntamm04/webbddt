import {IAccount} from "./IAccount";

export interface IAccountCustomer {
  idCustomer: string;
  surname: String;
  name: String;
  gender: String;
  phone: String;
  email:String;
  address: String;
  status: number;
  account: IAccount
} 
