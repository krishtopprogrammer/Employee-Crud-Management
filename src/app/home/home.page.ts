import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NavController} from '@ionic/angular'
import { Employee } from './employee';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

        employee: Employee;

        public headers = new HttpHeaders({ 'Content-Type': 'application/json'});

        constructor(
          private http: HttpClient, 
          private emp: EmployeeService, 
          private alertCtrl: AlertController, 
          private navCtrl: NavController
        ){}


        empObject: Employee = new Employee()

        ngOnInit() {
              this.getAllEmployeeDetails()  
              let acc = document.getElementsByClassName("accordion");
              let i;
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  } 
                });
}
        }

       
        public url = 'http://localhost:5555/Employees'; 
        jsonData;
        public employeeObject:object = {};
        public idRemoval:object = {};
        name: string;

     

        getAllEmployeeDetails() {
          this.emp.getAllEmployees(this.url).subscribe(
            (data) => {
              this.jsonData = data;
            }
          )
        }



        
        deleteEmployee = function(id) {
          if(confirm("Are you sure?")) {
            const url = `${"http://localhost:5555/Employees"}/${id}`;
            return this.http.delete(url, {headers: this.headers}).toPromise()
              .then(() => {
              this.getAllEmployeeDetails();
              })
          }
        }

        getEmployeeById(id:number) {
          this.emp.getEmployee(id).subscribe(data => console.log(data))
      }  

      displayEditForm() {
        document.getElementById("container").style.display = "block";
      }

      closeEditForm() {
        document.getElementById("container").style.display = "none";
      }
      
      
      updateEmployee(id:number) {
          this.name=((document.getElementById("name") as HTMLInputElement).value);
        let lastname=((document.getElementById("lastname") as HTMLInputElement).value);
         this.employee={
          "id": id ,
          "name":this.name,
          "lastname":lastname
        };

    

        this.emp.updateEmployee(this.employee, id).subscribe();
      console.log(this.emp.updateEmployee(this.employee, id));
      

      }
    }     

      
