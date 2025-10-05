import {IAccount} from "./IAccount";
import {IBill} from "./IBill";

export interface ICustomer {
  idCustomer: string;
  surname: string;
  name: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  status: number;
  account: IAccount;
  bills: IBill[];
} 
