import {Component, ElementRef, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {AlertService} from "../../product/alert.service";
import {LoginService} from "../../services/login.service";
import {Title} from "@angular/platform-browser";
import {CustomerService} from "../../services/customer.service";

function checkPassword(input: AbstractControl): ValidationErrors | null {
  if (input.value.newPassword !== input.value.confirmPassword){
    return {checkPassword: true}
  }
  return null; 
}

function checkEqualsPassword(input: AbstractControl): ValidationErrors | null {
  if(input.value.password === input.value.passwordGroup.newPassword){
    return {checkEqualsPassword: true}
  }
  return null;
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  searchItem!: FormGroup;
  totalItem: number =0;
  name: string ='';
  tag =["Asus","Dell","Apple","HP","Lenovo","MSI"];

  isOpenToast: boolean = false;
  isSubmit: boolean = false;
  username: string = '';
  formChangePassword: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    passwordGroup: new FormGroup({
      newPassword: new FormControl('', [Validators.required,
        Validators.pattern('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&\'()*+,-.:;<=>?@[\\]^_`{|}~]).{6,12})$')]),
      confirmPassword: new FormControl('', [Validators.required])
    }, [checkPassword])
  }, [checkEqualsPassword]);

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private alertService: AlertService,
              private loginService: LoginService,
              private titleService: Title,
              private customerService:CustomerService,
              private element: ElementRef) { }

  ngOnInit(): void {
    this.setFocus();
    if (this.loginService.getUserName() !== ''){
      this.username = this.loginService.getUserName();
    }else{
      this.router.navigateByUrl("/login").then();
    }
    this.titleService.setTitle("Đổi Mật Khẩu");
    this.name= this.loginService.getUserName();
    this.totalItem = this.cartService.getSoLuongGioHang();
    this.searchItem = new FormGroup({
      itemSearch: new FormControl('')
    });
  };
  setFocus(){
    const elm = this.element.nativeElement.querySelector('#password');
    if(!elm?.autofocus){
      elm?.focus();
    }
  }
  hideToast(): void{
    this.isOpenToast = false;
  }

  doSubmit(): void{
    if(this.formChangePassword.valid){
      this.isSubmit = false;
      this.isOpenToast = false;
      if(this.username !== null){
        this.loginService.doChangePassword(this.username, this.form.password.value, this.newPassword?.value)
          .subscribe(result => {
            if(result.message !== 'success'){
              this.setFocus();
              this.isOpenToast = true;
              this.alertService.showMessageWarring("Mật khẩu cũ không đúng!");
            }else{
              this.isOpenToast = false;
              this.alertService.showAlertSuccess("Đổi mật khẩu thành công!");
              this.router.navigateByUrl("/").then();
              this.loginService.removeRememberMe();
            }
          }, error => {
            this.isOpenToast = true;
          })
      }
    }else{
      this.isSubmit = true;
    }
  }
  get form(){
    return this.formChangePassword.controls;
  }

  get newPassword(){
    return this.formChangePassword.get("passwordGroup.newPassword")
  }

  get confirmPassword(){
    return this.formChangePassword.get("passwordGroup.confirmPassword")
  }

  cancel(){
    this.router.navigateByUrl("/").then();
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
}
