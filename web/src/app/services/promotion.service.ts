import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private baseURL = 'http://localhost:8080/product/listPromotion';
  private httpOptions: { headers: HttpHeaders };
  constructor(private http: HttpClient,private loginService: LoginService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.loginService.getToken(),
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }),
    }; 
  }

  findAllPromotion(): Observable<any>{
    return this.http.get<any>(this.baseURL,this.httpOptions);
  }
}
