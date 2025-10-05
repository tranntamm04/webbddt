import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ICustomer} from "../../interface/ICustomer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  id: String ='';
  customer!: ICustomer;
 
  constructor(private customerService: CustomerService,public dialog: MatDialogRef<DetailCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {
  }

  ngOnInit(): void {
    this.id = this.data.customerId;
    this.customerService.getCustomerById(this.id).subscribe((data) => {
      this.customer= data;
    })
  }

  close() {
    this.dialog.close()
  }
}
