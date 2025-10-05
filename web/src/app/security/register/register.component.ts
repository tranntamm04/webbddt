import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  MaxLengthValidator,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {AlertService} from "../../product/alert.service";
import {EmployeeService} from "../../services/employee.service";
import {IAccount} from "../../interface/IAccount";

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  createEmployee: any;
  createF!: FormGroup;
  accountList: IAccount[] =[];
  constructor(private customerService: CustomerService,private router:Router,private alertService:AlertService,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllAccount().subscribe((data) => {
      this.accountList= data;
    });
    this.createF = new FormGroup({
      surname: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      gender: new FormControl('0',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required,Validators.maxLength(9)]),
      password: new FormControl('',[Validators.required,Validators.pattern('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&\'()*+,-.:;<=>?@[\\]^_`{|}~]).{6,12})$')]),
  })
  }

  create() {
    var check= true;
    for (let i = 0; i < this.accountList.length; i++) {
      if (this.createF.value.userName === this.accountList[i].userName) {
        this.alertService.showMessageWarring("Tài khoản đã tồn tại!");
        check= false;
      }
    }

    if (this.createF.valid && check){
      this.customerService.createCustomer(this.createF.value).subscribe((data) => {
        this.router.navigate(['/login']);
        this.alertService.showAlertSuccess("Tạo Mới Thành Công!")

      });
    }else if (!this.createF.valid && !check){
      this.alertService.showMessageWarring("Bạn chưa nhập đủ thông tin!");
    }
  }
}
