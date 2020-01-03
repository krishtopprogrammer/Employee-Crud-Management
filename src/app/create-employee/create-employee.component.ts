import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../home/employee.service'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NavController} from '@ionic/angular'
import { Employee } from '../home/employee';
import {HomePage} from '../home/home.page'

@Component({
  selector: 'app-create-employee',
  templateUrl: 'create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  public employeeObject: Employee;
  employee: Employee;

  constructor(private http: HttpClient, private empService: EmployeeService, private alertCtrl: AlertController, private home: HomePage) {
  
   }

  ngOnInit() {
  }


  


  addEmployee() {
    let name=((document.getElementById("name") as HTMLInputElement).value);
    let lastname=((document.getElementById("lastname") as HTMLInputElement).value);
    let id:number;
     this.employee={
      "name":name,
      "lastname":lastname,
      "id": id
    }
    console.log(this.employeeObject);
    this.empService.createEmployee(this.employee).subscribe((res: Response)=>{
      console.log(res)
    })  
    
  }



   
  

}