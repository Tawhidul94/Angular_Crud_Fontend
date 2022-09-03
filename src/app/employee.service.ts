import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allemployeUrl:string = "http://localhost:8081/api/employe/allemploye";
  addEmployeeUrl:string="http://localhost:8081/api/employe/save";
  singaleemployeurl="http://localhost:8081/api/employe/employe/";
  upateEplyeeurl="http://localhost:8081/api/employe/update/";
  deleteurl="http://localhost:8081/api/employe/delete/";
  id?:number;
  constructor(private httpClint:HttpClient) { }
  getAllEmployee(){
    return this.httpClint.get(this.allemployeUrl)
  }

  addEmployee(employee?: Employee):Observable<object>{
    return this.httpClint.post(this.addEmployeeUrl,employee);
   
  }
  getId(id?:number){
    this.id=id;
  }
 
  getEmployeeById() :Observable<Employee>{
    return this.httpClint.get<Employee>(this.singaleemployeurl+this.id);
  }

  updateEmployeeById(employee?:Employee):Observable<object>{
    return this.httpClint.put(this.upateEplyeeurl+this.id,employee);
  }

  deleteEmployeeById(id?:number):Observable<object>{
    return this.httpClint.delete(this.deleteurl+id);
  }


    
}
