import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AlertService} from "../../employee/alert.service";
import {ProductService} from "../../services/product.service";
import {CustomerService} from "../../services/customer.service";
import {AccountDTO} from "../../interface/AccountDTO";
import {BillService} from "../../services/bill.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CartService} from "../../services/cart.service";
import {BillDTO} from "../../interface/BillDTO";
import {IProductDTO} from "../../interface/IProductDTO";
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalPay: number =0;
  userName: string ='';
  account!: AccountDTO;
  payment!: FormGroup;
  public product: IProductDTO[]=[];
  bill!: BillDTO;
  recived: string ='';
  private char: string='';
  constructor(public dialog: MatDialogRef<PaymentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private productService: ProductService,private alertService: AlertService,
              private customerService:CustomerService, private billService: BillService, private cartService: CartService) { }

  ngOnInit(): void {
    this.totalPay =this.data.total;
    this.userName =this.data.user;
    this.customerService.getCustomerUser(this.userName).subscribe((data) => {
      this.account = data;
    });
    this.payment = new FormGroup({
      selectHinhThucTT: new FormControl('')
    });
  }

  thanhtoan() {
    this.recived = this.account.surname+ ' ' + this.account.name;
    this.product= this.cartService.getListGioHang();
    this.bill = new BillDTO(this.recived,this.account.phone,this.account.address,
      this.payment.value.selectHinhThucTT,this.totalPay,this.userName,this.product);
    this.billService.payment(this.bill).subscribe((data) => {
      this.alertService.showAlertSuccess("Thanh toán thành công!");
      this.cartService.xoaHet();
      this.dialog.close();
    });
  }
  numToString(num: number) {
    return num.toLocaleString().split(',').join(this.char || '.');
  }
}
