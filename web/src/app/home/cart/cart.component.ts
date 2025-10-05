import {Component, OnInit, Renderer2} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {AlertService} from "../../product/alert.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Title} from "@angular/platform-browser";
import {DeleteEmployeeComponent} from "../../employee/delete-employee/delete-employee.component";
import {PaymentComponent} from "../payment/payment.component";
import {MatDialog} from "@angular/material/dialog";
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalItem: number =0;
  public product: any=[];
  grandTotal: number =0;
  tag =["Asus","Dell","Apple","HP","Lenovo","MSI"];
  searchItem!: FormGroup;
  name: string = '';
  private char: any;

  constructor(private cartService: CartService,
              private productService: ProductService,
              private router: Router,
              private alertService: AlertService,
              private loginService: LoginService,
              private titleService: Title,
              private dialog: MatDialog,
              private renderer:Renderer2) { }

  ngOnInit(): void {
    this.titleService.setTitle("Giỏ Hàng");
    this.name= this.loginService.getUserName();
    this.grandTotal =0;
    this.getListGioHang();
    this.totalItem = this.cartService.getSoLuongGioHang();
    this.searchItem = new FormGroup({
      itemSearch: new FormControl('')
    })
  }
  getListGioHang(){
    this.product= this.cartService.getListGioHang();
    for (let i =0;i<this.product.length;i++){
      this.grandTotal+= this.product[i].price * this.product[i].quantity;
    }
  }

  xoaSP(masp: number) {
    this.cartService.xoaSanPham(masp);
    this.alertService.showAlertSuccess("Xóa sản phẩm thành công!");
    this.ngOnInit();
  }

  xoaHet() {
    this.cartService.xoaHet();
    this.alertService.showAlertSuccess("Xóa sản phẩm thành công!");
    this.ngOnInit();
  }

  searchTag(t: string) {
    this.productService.key = t;
    this.router.navigateByUrl("/").then();
  }

  openSearch() {
    this.productService.key = this.searchItem.value.itemSearch;
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

  thanhToan() {
    if (this.name ===''){
      this.alertService.showMessageWarring("Bạn chưa đăng nhập!");
    }else if (this.product.length === 0){
      this.alertService.showMessageWarring("Bạn chưa mua hàng!");
    } else {
      const dialog = this.dialog.open(PaymentComponent, {
        width: '500px',
        data: {total: this.grandTotal,user: this.name}
      });
      dialog.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  quantity_up(p: number) {
    this.cartService.tangSoLuongSanPham(p);
    this.ngOnInit();
  }

  quantity_down(p:number) {
    this.cartService.giamSoLuongSanPham(p);
    this.ngOnInit();
  }
}
