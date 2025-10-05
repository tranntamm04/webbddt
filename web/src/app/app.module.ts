import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ToastrModule} from "ngx-toastr";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import {HomeModule} from "./home/home.module";
import {EmployeeModule} from "./employee/employee.module";
import {CustomerModule} from "./customer/customer.module";
import { NewsComponent } from './component/news/news.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import {AdminModule} from "./admin/admin.module";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {DetailEmployeeComponent} from "./employee/detail-employee/detail-employee.component";
import {DetailCustomerComponent} from "./customer/detail-customer/detail-customer.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {DeleteCustomerComponent} from "./customer/delete-customer/delete-customer.component";
import {ProductModule} from "./product/product.module";
import {MatCarouselModule} from "@ngmodule/material-carousel";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ListBillComponent } from './bill/list-bill/list-bill.component';
import {BillModule} from "./bill/bill.module";
import { InfoProductComponent } from './home/info-product/info-product.component';
import { CartComponent } from './home/cart/cart.component';
import {SecurityModule} from "./security/security.module";
import { NumtostringPipe } from './numtostring.pipe';
import { PaymentComponent } from './home/payment/payment.component';
import { CustomerBillComponent } from './home/customer-bill/customer-bill.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { XemchitietComponent } from './home/xemchitiet/xemchitiet.component';
import { DuyetComponent } from './home/duyet/duyet.component';
import { DeleteBillComponent } from './bill/delete-bill/delete-bill.component';
import { ChartComponent } from './bill/chart/chart.component';
import {StarRatingModule} from "angular-star-rating";
import {RatingModule} from "ng-starrating";
import { ChangePasswordComponent } from './security/change-password/change-password.component';
import { RevenueComponent } from './revenue/revenue.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    ListProductComponent,
    CreateProductComponent,
    DetailProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    NewsComponent,
    HomeAdminComponent,
    ListEmployeeComponent,
    DetailEmployeeComponent,
    DetailCustomerComponent,
    CreateEmployeeComponent,
    DeleteCustomerComponent,
    EditEmployeeComponent,
    ListBillComponent,
    InfoProductComponent,
    CartComponent,
    NumtostringPipe,
    PaymentComponent,
    CustomerBillComponent,
    XemchitietComponent,
    DuyetComponent,
    DeleteBillComponent,
    ChartComponent,
    ChangePasswordComponent,
    RevenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    RouterModule,
    HomeModule,
    EmployeeModule,
    CustomerModule,
    AdminModule,
    ProductModule,
    MatCarouselModule.forRoot(),
    NgbModule,
    BillModule,
    SecurityModule,
    MatListModule,
    MatIconModule,
    StarRatingModule.forRoot(),
    RatingModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HomeAdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
