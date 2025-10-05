import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeRouterModule} from "./employee-router.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PhonePipe} from "../phone.pipe";
import {DeleteEmployeeComponent} from "./delete-employee/delete-employee.component";

@NgModule({
  declarations: [
    PhonePipe,
    DeleteEmployeeComponent,
  ], 
  exports: [
    PhonePipe,
  ],
  imports: [
    CommonModule,
    EmployeeRouterModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule, 
    RouterModule,
  ]
})
export class EmployeeModule {
}
