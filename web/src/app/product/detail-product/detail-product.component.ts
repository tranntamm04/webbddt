import {Component, Inject, OnInit} from '@angular/core';
import {IProductDTO} from "../../interface/IProductDTO";
import {EmployeeService} from "../../services/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../interface/IProduct";
 
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  // @ts-ignore
  id: number;
  product!: IProductDTO;
  private char: any;

  constructor(private productService: ProductService,public dialog: MatDialogRef<DetailProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    this.id = this.data.idProduct;
    this.productService.getProductById(this.id).subscribe((data) => {
      this.product= data;
    })
  }

  close() {
    this.dialog.close();
  }
  numToString(num: number) {
    return num.toLocaleString().split(',').join(this.char || '.');
  }
}
