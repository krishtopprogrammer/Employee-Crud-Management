import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../home/employee.service'
import { Employee } from '../home/employee'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee
  id:number;
  name: string;
  lastname:string;
  exist = false;
  private headers = new Headers({ 'Content-Type': 'application/json'});


  constructor(private route: ActivatedRoute,private router: Router,private emp: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
     this.emp.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data; 
      }, error => console.log(error));
      console.log(this.employee)
  }


  updateEmployee(id:number) {
  let name=((document.getElementById("name") as HTMLInputElement).value);
  let lastname=((document.getElementById("lastname") as HTMLInputElement).value);
   this.employee={
    "id": this.id ,
    "name":name,
    "lastname":lastname
  };
console.log(this.employee);
 this.emp.updateEmployee(this.employee, this.id).subscribe();


}




}