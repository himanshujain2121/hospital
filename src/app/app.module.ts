import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './InputComponentInteraction/employee/employee.component';
import { EmployeeListComponent } from './InputComponentInteraction/employee/employee-list/employee-list.component';
import { DepartmentComponent } from './OutputComponentInteraction/department/department.component';
import { DepartmentListComponent } from './OutputComponentInteraction/department/department-list/department-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
