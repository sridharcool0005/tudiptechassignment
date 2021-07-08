import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getEmployees(limit: number, skip: number) {
    return this.http.get(environment.apiBaseUrl + '/getEmployees/' + limit + '/' + skip);
  }

  createEmployee(data) {
    return this.http.post(environment.apiBaseUrl + '/createEmployee', data);
  }

  updateEmployee(data) {
    return this.http.put(environment.apiBaseUrl + '/updateEmployee', data);
  }

  employeeDetails(data) {
    return this.http.post(environment.apiBaseUrl + '/employeeDetails', data);
  }

  deleteEmployee(data) {
    return this.http.post(environment.apiBaseUrl + '/deleteEmployee', data);
  }
  employeefilter(data){
    return this.http.post(environment.apiBaseUrl + '/employeefilter', data);

  }

}
