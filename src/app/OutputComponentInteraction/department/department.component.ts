import { Component, OnInit } from '@angular/core';
import { Department } from '../department/Department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentvalue: Department;
  constructor() { }

  ngOnInit() {
  }

  receiveFromParent(dept: Department) {
    this.departmentvalue = dept;
  }
}
