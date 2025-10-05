import {IAccount} from "./IAccount";
import {IPosition} from "./IPosition";

export interface IAccountEmployee {
  idEmployee: number;
  fullName: String;
  dateOfBirth: string;
  email: String;
  address: String;
  phone: String;
  avtUrl: String;
  userName: String;
  password: String;
  positionId: number;
  account: IAccount;
  position: IPosition;
} 
