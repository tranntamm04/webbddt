import {Component, Inject, OnInit} from '@angular/core';
import {BillService} from "../../services/bill.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../services/product.service";
import {IProductDTO} from "../../interface/IProductDTO";
import {ContractDetail} from "../../interface/ContractDetail";

@Component({
  selector: 'app-xemchitiet',
  templateUrl: './xemchitiet.component.html',
  styleUrls: ['./xemchitiet.component.css']
}) 
export class XemchitietComponent implements OnInit {
  // @ts-ignore
  id:number;
  list: ContractDetail[]=[];
  product!: IProductDTO;
  char: string='';
  constructor(private billService: BillService,
              public dialog: MatDialogRef<XemchitietComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private productService:ProductService) { }

  ngOnInit(): void {
    this.id =this.data.idBill;
    this.billService.xemChiTiet(this.id).subscribe((data) =>{
      this.list =data;
      console.log(this.list);
    });
  }
  numToString(num: number) {
    return num.toLocaleString().split(',').join(this.char || '.');
  }

  close() {
    this.dialog.close();
  }
}
