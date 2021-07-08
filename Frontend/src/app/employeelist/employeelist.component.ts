import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../apiCalls/api-call.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  emailSearch: string;
  nameSearch: string;
  employees: Employee[] = [];
  paginationLimit = 5;

  constructor(private apiCallService: ApiCallService) {
  }

  ngOnInit() {
    this.getEmployees(0);
  }

  deleteEmployee(empId, id) {
    const data = { _id: empId };
    this.apiCallService.deleteEmployee(data).subscribe((res: any) => {
      // console.log(res);
      alert(res.message);
      this.employees.splice(id, 1);
    });
  }

  employeefilter() {
    const data:any = {}
    if (this.emailSearch) {
      data.email = this.emailSearch
    }
    if (this.nameSearch) {
      data.name = this.nameSearch;
    }
    this.apiCallService.employeefilter(data).subscribe((res: any) => {
      // console.log(res);
      this.employees = res.result;
    });
  }


  getpreviousdata(){
    const skip = this.employees.length - this.employees.length;
    this.getEmployees(skip)
  }

  getnextdata(){
   const skip = this.employees.length;
   this.getEmployees(skip);
  }

  getEmployees(skip: number) {
    this.apiCallService.getEmployees(this.paginationLimit, skip).subscribe((res: any) => {
      // console.log(res);
      this.employees = res;
    });
  }
}

