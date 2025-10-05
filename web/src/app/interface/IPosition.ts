import {IEmployee} from "./IEmployee";

export interface IPosition {
  positionId: number;
  positionName: String;
  employees: IEmployee[];
}
 