import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {ListProductComponent} from "../product/list-product/list-product.component";


const routers: Routes = [
  {path: 'homeAdmin', component: HomeAdminComponent},
  {path: 'listProduct', component: ListProductComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ] 
})
export class AdminRouterModule { }
