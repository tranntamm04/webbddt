import {Component, OnInit, Renderer2} from '@angular/core';
import {IProduct} from "../../interface/IProduct";
import {ProductService} from "../../services/product.service";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {CartService} from "../../services/cart.service";
import {AlertService} from "../../product/alert.service";
import {FormControl, FormGroup} from "@angular/forms";
import {toBase64String} from "@angular/compiler/src/output/source_map";
import {LoginService} from "../../services/login.service";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({ 
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  totalItem: number = 0;
  productList: IProduct[] = [];
  productListView: any[]=[];
  title = 'ng-carousel-demo';
  tag = ["Asus", "Dell", "Apple", "HP","Lenovo","MSI"];
  name: string = '';

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/bn1.png"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../../assets/bn2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../../assets/bn3.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../../assets/bn4.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../../assets/bn5.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../../assets/bn6.png"},
  ];
  searchItem!: FormGroup;
  indexPagination: number = 1;
  totalPagination: number = 0;
  private char: string = '';
  private totalE: any;

  constructor(config: NgbCarouselConfig,
              private productService: ProductService,
              private cartService: CartService,
              private alertService: AlertService,
              private loginService: LoginService,
              private titleService: Title,
              private router: Router,
              private renderer: Renderer2) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.titleService.setTitle("Trang Chủ");
    this.name = this.loginService.getUserName();
    this.totalItem = this.cartService.getSoLuongGioHang();
    if (this.productService.key !== '') {
      this.searchTag(this.productService.key);
      this.productService.key = '';
    } else {
      this.getList();
    };
    this.searchItem = new FormGroup({
      itemSearch: new FormControl('')
    });
  }

  getList() {
    this.productService.getAllProductHome().subscribe((data) => {
      this.productList = data.content;
      // this.productList.forEach(item =>{
      //   this.productListView.push({
      //     idProduct: item.idProduct,
      //     avt: item.avt,
      //     productName: item.productName,
      //     price: item.price,
      //     numOfReview: item.numOfReview,
      //     promotion: item.promotion,
      //     star: new Array(item.numOfStar),
      //   })
      // });
      this.totalPagination = data.totalPages;
      this.totalE= data.totalElements;
    })
  }

  add(p: number, productName: String, price: number,avt: string) {
    this.cartService.addToGioHang(p, productName, price,avt);
    this.alertService.showAlertSuccess("Thêm thành công sản phẩm!");
    this.ngOnInit();
  }

  on() {
    this.productService.key = '';
    this.ngOnInit()
  }

  searchTag(t: string) {
    this.productService.searchItem(t).subscribe((data) => {
      this.productList = data.content;
      this.totalPagination = data.totalPages;
      this.totalE= data.totalElements;
      this.alertService.showAlertSuccess("Tìm thấy " + this.totalE +" sản phẩm!");
    });
    try {
      const errorField = this.renderer.selectRootElement('.sanPham');
      errorField.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"} );
    } catch (err) {

    }
  }

  logout() {
    this.loginService.removeRole();
    this.loginService.removeToken();
    this.loginService.removeUserName();
    this.cartService.xoaHet();
    this.router.navigateByUrl("/login").then();
  }

  getPage(page: number) {
    this.productService.getSearchProduct(this.searchItem.value.itemSearch, page).subscribe((data) => {
      this.productList = data.content;
      this.indexPagination = data.pageable.pageNumber + 1;
      this.totalPagination = data.totalPages;
      this.totalE= data.totalElements;
    });
    try {
      const errorField = this.renderer.selectRootElement('.sanPham');
      errorField.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"} );
    } catch (err) {

    }
  }

  openSearch() {
    this.productService.searchItem(this.searchItem.value.itemSearch).subscribe((data) => {
      this.productList = data.content;
      this.totalPagination = data.totalPages;
      this.totalE= data.totalElements;
      this.alertService.showAlertSuccess("Tìm thấy " + this.totalE +" sản phẩm!");
    });
    try {
      const errorField = this.renderer.selectRootElement('.sanPham');
      errorField.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"} );
    } catch (err) {

    }
  }

  numToString(num: number) {
    return num.toLocaleString().split(',').join(this.char || '.');
  }
}
