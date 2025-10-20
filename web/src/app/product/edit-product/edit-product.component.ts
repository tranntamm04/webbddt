import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProductType} from "../../interface/IProductType";
import {IPromotion} from "../../interface/IPromotion";
import {ProductTypeService} from "../../services/product-type.service";
import {PromotionService} from "../../services/promotion.service";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../alert.service";
 
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  createProduct!: FormGroup;
  productType: IProductType[] =[];
  promotion: IPromotion[] =[];
  // @ts-ignore
  id:number;

  constructor(private productTypeService: ProductTypeService,
              private promotionService: PromotionService,private productService: ProductService,
              private router: Router, private alertService: AlertService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createProduct = new FormGroup({
      idProduct: new FormControl(''),
      productName: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      screen: new FormControl(''),
      hdh: new FormControl(''),
      cameraT: new FormControl(''),
      cpu: new FormControl(''),
      ram: new FormControl(''),
      rom: new FormControl(''),
      sdCard: new FormControl(''),
      pin: new FormControl(''),
      idPromotion: new FormControl('', [Validators.required]),
      idType: new FormControl('', [Validators.required]),
      avt: new FormControl('')
    });
    this.productTypeService.findAllProductType().subscribe((data) => {
      this.productType = data;
    });
    this.promotionService.findAllPromotion().subscribe((data) => {
      this.promotion = data;
    });
    this.activatedRoute.paramMap.subscribe((paramap) => {
      // @ts-ignore
      this.id = paramap.get('id');
      this.productService.getProductById(this.id).subscribe(data => {
        console.log(data);
        this.createProduct.patchValue(data);
      });
    });
  }

  create() {
    if (this.createProduct.valid){
      this.productService.update(this.createProduct.value,this.id).subscribe((data) =>{
        this.router.navigate(['/listProduct']);
        this.alertService.showAlertSuccess("Cập Nhật Thành Công!")
      })
    }
  }
}
