import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
      var varresp;
      console.log('Query Java');
      varresp = this.http.get<any>('http://localhost:8080/middleware/employee.htm');
      console.log(varresp);
      
    return varresp;
  }
}