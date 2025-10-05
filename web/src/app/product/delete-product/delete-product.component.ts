import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../../services/employee.service";
import {AlertService} from "../../employee/alert.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
}) 
export class DeleteProductComponent implements OnInit {
  name='';
  // @ts-ignore
  id: number;
  constructor(public dialog: MatDialogRef<DeleteProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private productService: ProductService,private alertService: AlertService) { }

  ngOnInit(): void {
    this.id = this.data.idProduct;
    this.name = this.data.productName;
  }

  close() {
    this.dialog.close();
  }

  delete() {
    this.productService.deleteProduct(this.id).subscribe((data) => {
      this.dialog.close();
      this.alertService.showAlertSuccess('Xóa sản phẩm thành công!');
    })
  }
}
