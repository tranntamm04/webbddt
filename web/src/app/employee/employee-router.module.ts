import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";
import {AuthGuard} from "../services/AuthGuard";


const routersEmployee: Routes = [
  {path: 'listEmployee', component: ListEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'createEmployee', component: CreateEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'editEmployee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard]},
];

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routersEmployee)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class EmployeeRouterModule { 
}
