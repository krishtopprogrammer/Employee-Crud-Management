import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import {Observable} from 'rxjs';
import {HomePage} from './home.page'
 



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public empObj;
  public url = "http://localhost:5555/Employees";   
  constructor(private http: HttpClient ) { }



  getAllEmployees(url) {
    return this.http.get(url)
    
  }

  createEmployee(employee: Object ) {
    return this.http.post('http://localhost:5555/Employees/' , employee);
  }

  deleteEmployee(value: number) {
    return this.http.delete(this.url + "/" + value).subscribe()
  }

  updateEmployee(employee: Employee, id:number) {  
    return this.http.put(this.url + '/' + id, employee);  
  } 
  
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }



} 



























