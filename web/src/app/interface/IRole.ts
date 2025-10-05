import {IAccountRole} from "./IAccountRole";

export interface IRole {
  roleId: number;
  roleName: String;
  accountRoleList: IAccountRole[];
} 
