import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {AuthGuard} from "../services/AuthGuard";


const routersCustomer: Routes =[
  {path: 'listCustomer',component: ListCustomerComponent, canActivate: [AuthGuard]},
  {path: 'createCustomer',component: CreateCustomerComponent, canActivate: [AuthGuard]},
  {path: 'editCustomer:/id',component: EditCustomerComponent, canActivate: [AuthGuard]},
];


@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routersCustomer)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CustomerRouterModule { }
