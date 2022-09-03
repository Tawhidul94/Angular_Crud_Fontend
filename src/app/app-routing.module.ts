import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLstComponent } from './employee-lst/employee-lst.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employee',component:EmployeeLstComponent},
  {path : 'add-employee',component:AddEmployeeComponent},
  {path :'update-employee',component:UpdateEmployeeComponent},
  {path:'',redirectTo:'/employee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
