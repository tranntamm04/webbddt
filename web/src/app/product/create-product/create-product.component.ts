import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProductType } from '../../interface/IProductType';
import { ProductTypeService } from '../../services/product-type.service';
import { IPromotion } from '../../interface/IPromotion';
import { PromotionService } from '../../services/promotion.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { IProductDTO } from '../../interface/IProductDTO';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  createProduct!: FormGroup;
  productType: IProductType[] = [];
  promotion: IPromotion[] = [];
  submitting = false;

  constructor(
    private productTypeService: ProductTypeService,
    private promotionService: PromotionService,
    private productService: ProductService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // form không dùng generic
    this.createProduct = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      quantity: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      avt: new FormControl('', [Validators.required]),
      screen: new FormControl('', [Validators.required]),
      hdh: new FormControl('', [Validators.required]),
      cameraT: new FormControl('', [Validators.required]),
      cpu: new FormControl('', [Validators.required]),
      ram: new FormControl('', [Validators.required]),
      rom: new FormControl('', [Validators.required]),
      sdCard: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required]),
      idType: new FormControl(null, [Validators.required]),
      idPromotion: new FormControl(null, [Validators.required]),
    });

    // nạp danh mục + khuyến mãi
    this.productTypeService.findAllProductType().subscribe({
      next: (data) => (this.productType = data || []),
      error: () => (this.productType = []),
    });
    this.promotionService.findAllPromotion().subscribe({
      next: (data) => (this.promotion = data || []),
      error: () => (this.promotion = []),
    });
  }

  onFileChange(evt: Event) {
    const input = evt.target as HTMLInputElement;
    const file = input?.files && input.files[0];
    if (file) this.createProduct.get('avt')?.setValue(file.name);
  }

  create() {
    if (this.createProduct.invalid || this.submitting) return;
    this.submitting = true;

    // Ép kiểu số tại đây vì form control không typed
    const v = this.createProduct.value;
    const payload: IProductDTO = {
      ...v,
      price: Number(v.price),
      quantity: Number(v.quantity),
      idType: Number(v.idType),
      idPromotion: Number(v.idPromotion),
    };

    this.productService.createProduct(payload).subscribe({
      next: () => {
        this.alertService.showAlertSuccess('Tạo Mới Thành Công!');
        this.router.navigate(['/listProduct']);
      },
      error: () => (this.submitting = false),
    });
  }
}
