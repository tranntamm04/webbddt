import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductType } from '../interface/IProductType';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private baseUrl = 'http://localhost:8080/productType'; // RESTful controller backend

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  /** Header có JWT */
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.loginService.getToken() // Lấy token giống ProductService
      })
    };
  }

  /** Lấy danh sách tất cả danh mục */
  findAllProductType(): Observable<IProductType[]> {
    return this.http.get<IProductType[]>(this.baseUrl, this.getHttpOptions());
  }

  /** Lấy chi tiết danh mục theo id */
  getById(id: number): Observable<IProductType> {
    return this.http.get<IProductType>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }

  /** Tạo mới danh mục */
  create(productType: IProductType): Observable<IProductType> {
    return this.http.post<IProductType>(this.baseUrl, productType, this.getHttpOptions());
  }

  /** Cập nhật danh mục */
  update(id: number, productType: IProductType): Observable<IProductType> {
    return this.http.put<IProductType>(`${this.baseUrl}/${id}`, productType, this.getHttpOptions());
  }

  /** Xóa danh mục */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.getHttpOptions());
  }
}
