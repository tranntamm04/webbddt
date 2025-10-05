import {ICustomer} from "./ICustomer";
import {IEmployee} from "./IEmployee";
import {IAccountRole} from "./IAccountRole";

export interface IAccount {
  userName: string;
  password: string;
  customer: ICustomer;
  employee: IEmployee;
  accountRoleList: IAccountRole[];
}
 