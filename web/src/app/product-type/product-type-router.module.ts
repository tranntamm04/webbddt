import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ProductTypeComponent } from "./product-type.component";
import { AuthGuard } from "../services/AuthGuard";

const routes: Routes = [
  { path: 'product-type', component: ProductTypeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ProductTypeRouterModule { }
