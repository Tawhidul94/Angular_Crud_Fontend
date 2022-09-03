import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  constructor(private router :Router, private employeeService :EmployeeService ) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  

  getEmployeeById(){
    this.employeeService.getEmployeeById().subscribe(data=>{
      this.employee = data;
    })
  }

  updateemployee(id?:number){
    this.employeeService.updateEmployeeById(this.employee).subscribe();
      this.router.navigate(['employee']);
      alert("Employee Updated Successfully");
     
 
    
  }

}
