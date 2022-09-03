import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-lst',
  templateUrl: './employee-lst.component.html',
  styleUrls: ['./employee-lst.component.css']
})
export class EmployeeLstComponent implements OnInit {

  getAllEmployee :any

  constructor(private employeeService :EmployeeService,private router :Router)  { 
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.getAllEmployee = data;
    }
    )
    
  }

  ngOnInit(): void {
  }

 
  updateEmployeerecord(id?:number){
    this.router.navigate(['update-employee']);
    this.employeeService.getId(id);
  }

  deleteEmployeerecord(id?:number){
    this.employeeService.deleteEmployeeById(id).subscribe();
    this.router.navigate(['employee']);
    alert("Employee Deleted Successfully");
  }



 


}
