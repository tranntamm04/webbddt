import {IAccount} from "./IAccount";
import {IPosition} from "./IPosition";

export interface IEmployee {
  idEmployee: String;
  fullName: String;
  dateOfBirth: String;
  email: String;
  address: String;
  phone: String;
  avtUrl: String;
  account: IAccount;
  position: IPosition;

}
 