import {ICustomer} from "./ICustomer";

export interface IBill {
  idBill: number;
  dateFounded: string;
  received: string;
  phone: string;
  address: string;
  paymentMethods: string;
  totalMoney: number;
  status: number;
  customer: ICustomer;
}
