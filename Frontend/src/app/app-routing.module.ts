import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
{path:'viewEmployees',component:EmployeelistComponent},
{path:'manageemployee',component:CreateemployeeComponent},
{path:'manageemployee/:_id',component:CreateemployeeComponent},
{path:'dashboard',component:DashboardComponent},
{ path: '', redirectTo: '/viewEmployees', pathMatch: 'full'},
{ path: '**', redirectTo: '/viewEmployees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
