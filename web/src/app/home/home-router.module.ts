import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {NewsComponent} from "../component/news/news.component";
import {InfoProductComponent} from "./info-product/info-product.component";
import {CartComponent} from "./cart/cart.component";
import {CustomerBillComponent} from "./customer-bill/customer-bill.component";
import {AuthGuard} from "../services/AuthGuard";


const routers: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'news', component: NewsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'customerBill', component: CustomerBillComponent, canActivate: [AuthGuard]},
  {path: 'infoProduct/:id', component: InfoProductComponent},
];
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  providers: [AuthGuard]
})
export class HomeRouterModule { }
