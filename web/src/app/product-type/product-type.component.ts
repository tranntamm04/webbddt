import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductTypeService } from '../services/product-type.service';
import { IProductType } from '../interface/IProductType';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
})
export class ProductTypeComponent implements OnInit {
  productTypes: IProductType[] = [];
  form: FormGroup;
  isEditMode = false;
  selectedProductType: IProductType | null = null;

  constructor(
    private productTypeService: ProductTypeService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      idType: ['', [Validators.required, Validators.min(1)]], // bắt buộc khi thêm mới
      nameType: ['', Validators.required],
      description: [''],
      avt: [''],
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  /** Load tất cả danh mục */
  loadAll(): void {
    this.productTypeService.findAllProductType().subscribe({
      next: (data) => (this.productTypes = data),
      error: (err) => console.error('Error loading ProductTypes:', err),
    });
  }

  /** Chọn danh mục để sửa */
  selectProductType(pt: IProductType): void {
    this.selectedProductType = pt;
    this.isEditMode = true;
    this.form.patchValue({
      idType: pt.idType, // giữ nguyên ID khi sửa
      nameType: pt.nameType,
      description: pt.description,
      avt: pt.avt,
    });
  }

  /** Hủy sửa / reset form */
  cancelEdit(): void {
    this.selectedProductType = null;
    this.isEditMode = false;
    this.form.reset();
  }

  /** Thêm mới hoặc cập nhật */
  save(): void {
    if (this.form.invalid) return;

    const data: IProductType = this.form.value;

    if (!this.isEditMode) {
      // Kiểm tra trùng ID
      const exists = this.productTypes.some((pt) => pt.idType === data.idType);
      if (exists) {
        alert(`ID ${data.idType} đã tồn tại! Vui lòng nhập ID khác.`);
        return;
      }

      // Thêm mới
      this.productTypeService.create(data).subscribe({
        next: () => {
          this.productTypes.push(data); // cập nhật UI ngay
          this.form.reset();
        },
        error: (err) => console.error('Error creating ProductType:', err),
      });
    } else {
      // Cập nhật
      if (this.selectedProductType) {
        data.idType = this.selectedProductType.idType; // ép gán lại ID bị ẩn
        this.productTypeService
          .update(this.selectedProductType.idType, data)
          .subscribe({
            next: () => {
              this.loadAll();
              this.cancelEdit();
            },
            error: (err) => console.error('Error updating ProductType:', err),
          });
      }
    }
  }

  /** Xóa danh mục */
  deleteProductType(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Bạn có chắc chắn muốn xóa danh mục này?')) return;

    this.productTypeService.delete(id).subscribe({
      next: () => {
        // Xóa trực tiếp khỏi mảng Angular
        this.productTypes = this.productTypes.filter((pt) => pt.idType !== id);
      },
      error: (err) => console.error('Error deleting ProductType:', err),
    });
  }
}
