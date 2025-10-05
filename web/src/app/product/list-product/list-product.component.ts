import {Component, OnInit, Renderer2} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../interface/IProduct";
import {MatDialog} from "@angular/material/dialog";
import {DeleteProductComponent} from "../delete-product/delete-product.component";
import {DetailProductComponent} from "../detail-product/detail-product.component";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertService} from "../alert.service";
import {Title} from "@angular/platform-browser";

@Component({ 
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productList: IProduct[] =[];
  indexPagination: number=1;
  totalPagination: number=0;
  search!: FormGroup;
  private char: any;

  constructor(private productService: ProductService,
              private dialog: MatDialog,
              private renderer:Renderer2,
              private alertService:AlertService,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Quản Lý Sản Phẩm");
    this.search = new FormGroup({
     nameSearch: new FormControl('')
    });
    this.getList();
  }
  getList(){
    this.productService.getAllProduct().subscribe((data) =>{
      this.productList= data.content;
      this.totalPagination = data.totalPages;
    })
  }

  delete(idProduct: number, productName: String) {
    const dialog = this.dialog.open(DeleteProductComponent, {
      width: '500px',
      data: {idProduct: idProduct,productName: productName}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  view(idProduct: number) {
    const dialog = this.dialog.open(DetailProductComponent, {
      width: '500px',
      data: {idProduct: idProduct}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  getPage(page: number) {
    this.productService.getSearchProduct2(this.search.value.nameSearch,page).subscribe((data) => {
      this.productList = data.content;
      this.indexPagination  = data.pageable.pageNumber + 1;
      this.totalPagination = data.totalPages;
      console.log(this.productList);
    });
    try {
      const errorField = this.renderer.selectRootElement('.tb');
      errorField.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"} );
    } catch (err) {

    }
  }

  searchP() {
    this.productService.searchItem2(this.search.value.nameSearch).subscribe((data) => {
      this.productList = data.content;
      this.totalPagination = data.totalPages;
    },()=> {
      this.alertService.showMessageErrors("Không tìm thấy!");
    });
    try {
      const errorField = this.renderer.selectRootElement('.tb');
      errorField.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"} );
    } catch (err) {

    }
  }
  numToString(num: number) {
    return num.toLocaleString().split(',').join(this.char || '.');
  }
}
