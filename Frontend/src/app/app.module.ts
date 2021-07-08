import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule , ThemeService} from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HeaderComponent } from './header/header.component';
import {ApiCallService} from '../app/apiCalls/api-call.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPipe } from './pipes/search/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateemployeeComponent,
    HeaderComponent,
    DashboardComponent,
    SearchPipe,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule
  ],
  providers: [ ApiCallService, ThemeService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
