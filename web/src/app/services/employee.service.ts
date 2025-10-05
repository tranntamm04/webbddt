import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAccountEmployee} from "../interface/IAccountEmployee";
import {TokenStorageService} from "../security/token-storage.service";
import {LoginService} from "./login.service";
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  httpOptions: any;
  public API: string = "http://localhost:8080/employee";
  public API_CR: string = "http://localhost:8080/employee/createEmployee";
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService ,
              private loginService: LoginService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.loginService.getToken(),
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }),
    };
  }
  getAllEmployee(): Observable<any>{
      return this.http.get<any>(this.API+'/listEmployee',this.httpOptions);
  }
  getAllAccount(): Observable<any>{
    return this.http.get<any>(this.API+'/listAccount',this.httpOptions);
  }
  searchEmployee(nameSearch: String, typeSearch: String,page: number): Observable<any>{
    return this.http.get<any>(this.API+'/searchEmployee?nameSearch=' + nameSearch+ '&typeSearch=' + typeSearch+'&page=' + page,this.httpOptions)
  }
  getSearchEmployee(nameSearch: String, typeSearch: String): Observable<any>{
    return this.http.get<any>(this.API+'/searchEmployee?nameSearch=' + nameSearch+ '&typeSearch=' + typeSearch,this.httpOptions)
  }
  getEmployeeById(id : String): Observable<any>{
    return  this.http.get<any>(this.API+'/viewEmployee/' + id,this.httpOptions)
  }
  deleteEmployee(id: String): Observable<any>{
    return  this.http.delete<any>(this.API +'/deleteEmployee/' + id,this.httpOptions)
  }
  createEmployee(employee: IAccountEmployee): Observable<any>{
    return this.http.post<any>(this.API_CR , employee,this.httpOptions);
  }
  update(employee: IAccountEmployee, id: String):Observable<any>{
    return this.http.put<any>(this.API+'/updateEmployee/'+ id,employee,this.httpOptions);
  }
}
