// product-type.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeRouterModule } from './product-type-router.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ProductTypeRouterModule
  ]
})
export class ProductTypeModule { }
