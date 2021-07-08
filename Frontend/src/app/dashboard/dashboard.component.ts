import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../apiCalls/api-call.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  employees = [];
  days = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };
  constructor(private apiCall: ApiCallService) {
  }

  ngOnInit() {
    this.getEmployeeDetails()
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Registrations' }
  ];

  getEmployeeDetails() {
    this.apiCall.getEmployeeDetails().subscribe((res: any) => {
      this.employees = res;
      this.employees = this.employees.map(emp => {
        emp.createdday = this.days[new Date(emp.createdAt).getDay()];
        emp.dayIndex = new Date(emp.createdAt).getDay();
        return emp;
      });
      // console.log(this.employees)
      const tempResult = {};
      for (let { createdday, dayIndex } of this.employees) {
        tempResult[createdday] = {
          createdday,
          dayIndex,
          count: tempResult[createdday] ? tempResult[createdday].count + 1 : 1
        }
      }
      let result: any[] = Object.values(tempResult);
      for (let day of result) {
        this.barChartData[0].data[day.dayIndex] = day.count;
      }
      this.barChartData = [...this.barChartData];
    });
  }

}
