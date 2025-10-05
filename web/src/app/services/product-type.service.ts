import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductType {
  idType: number;
  nameType: string;
}
 
@Injectable({ providedIn: 'root' })
export class ProductTypeService {
  private readonly baseURL = 'http://localhost:8080/product/listProductType';

  constructor(private http: HttpClient) {}

  /** Lấy danh mục, không giữ header tĩnh để tránh token rỗng */
  findAllProductType(token?: string): Observable<ProductType[]> {
    const headers = token
      ? new HttpHeaders({
          Authorization: token.startsWith('Bearer ') ? token : `Bearer ${token}`,
        })
      : new HttpHeaders(); // trường hợp BE cho phép ẩn danh
    return this.http.get<ProductType[]>(this.baseURL, { headers });
  }
}
