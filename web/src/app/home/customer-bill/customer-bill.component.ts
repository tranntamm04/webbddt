import { Component, OnInit } from '@angular/core';
import {IBill} from "../../interface/IBill";
import {BillService} from "../../services/bill.service";
import {CustomerService} from "../../services/customer.service";
import {LoginService} from "../../services/login.service";
import {AccountDTO} from "../../interface/AccountDTO";
import {XemchitietComponent} from "../xemchitiet/xemchitiet.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Title} from "@angular/platform-browser";
import {ProductService} from "../../services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
 
@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {
  billList: IBill[] =[];
  userName: string ='';
  account!: AccountDTO;
  searchItem: any;
  tag =["Asus","Dell","Apple","HP","Lenovo","MSI"];
  totalItem: any;
  char: string='';
  constructor(private billService: BillService, private customerService:CustomerService,
              private loginService: LoginService, private dialog: MatDialog,private router:Router,
              private cartService: CartService,
              private titleService: Title,
              private productService:ProductService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Trang cá nhân");
    this.userName = this.loginService.getUserName();
    this.totalItem= this.cartService.getSoLuongGioHang();
    this.searchItem = new FormGroup({
      itemSearch: new FormControl('')
    });
    this.customerService.getCustomerUser(this.userName).subscribe((data) => {
      this.account= data;
      this.billService.getALLBill(this.account.idCustomer).subscribe((data) =>{
        this.billList = data;
      })
    });

  }

  xem(idBill: number) {
    const dialog = this.dialog.open(XemchitietComponent, {
      width: '500px',
      height: '5000px',
      data: {idBill: idBill}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  search() {
    this.productService.key = this.searchItem.value.itemSearch;
    this.router.navigateByUrl("/").then();
  }

  searchTag(t: any) {
    this.productService.key = t;
    this.router.navigateByUrl("/").then();
  }

  logout() {
    this.loginService.removeRole();
    this.loginService.removeToken();
    this.loginService.removeUserName();
    this.cartService.xoaHet();
    this.router.navigateByUrl("/login").then();
  }
  numToString(num: number) {
    return num.toLocaleString().split(',').join(this.char || '.');
  }
}
