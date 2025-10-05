import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "../employee/list-employee/list-employee.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AuthGuard} from "../services/AuthGuard";


const routers: Routes = [
  {path: 'listProduct', component: ListEmployeeComponent,canActivate: [AuthGuard]},
  {path: 'createProduct', component: CreateProductComponent,canActivate: [AuthGuard]},
  {path: 'editProduct/:id', component: EditProductComponent,canActivate: [AuthGuard]},
];

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ProductRouterModule { }
