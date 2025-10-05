import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListBillComponent} from "./list-bill/list-bill.component";
import {AuthGuard} from "../services/AuthGuard";
import {ChartComponent} from "./chart/chart.component";


const routers: Routes = [
  {path: 'listBill', component: ListBillComponent, canActivate: [AuthGuard]},
  {path: 'chart', component: ChartComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routers)
  ],
  providers: [AuthGuard]
})
export class BillRouterModule { }
