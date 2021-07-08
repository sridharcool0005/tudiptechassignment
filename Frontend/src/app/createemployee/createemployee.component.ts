import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../apiCalls/api-call.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.scss']
})
export class CreateemployeeComponent implements OnInit {

  employee = new Employee();

  constructor(private apiCall: ApiCallService, private router: Router,
    private route: ActivatedRoute) {
    this.employee._id = this.route.snapshot.paramMap.get('_id');
  }

  ngOnInit() {
    if (!!this.employee && !!this.employee._id) {
      this.getEmployee();
    }
  }

  getEmployee() {
    this.apiCall.employeeDetails({ _id: this.employee._id }).subscribe((res: any) => {
      if (res.success && !!res.result) {
        this.employee = res.result;
        //  console.log(this.employee)
      } else {
        alert(res.message)
      }
    })
  }

  saveEmployee() {
     console.log(this.employee)
    if (this.employee && this.employee._id) {
    this.updateEmployee();
    } else {
      this.createEmployee();
    }
  }


  createEmployee() {
    this.apiCall.createEmployee(this.employee).subscribe((res: any) => {
      // console.log(res);
      if (res.success) {
        this.router.navigate(['/home']);
      } else {
        alert(res.message)
      }
    },err=>{
      alert(err.error.message)
    });
  }

  updateEmployee() {
    this.apiCall.updateEmployee(this.employee).subscribe((res: any) => {
      // console.log(res);
      if (res.success) {
        this.router.navigate(['/home']);
      } else {
        alert(res.message)
      }
    });
  }



}
