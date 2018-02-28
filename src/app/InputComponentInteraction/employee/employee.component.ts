import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:Employee[]=[
    {Id:1,Name:'Himanshu',City:'Pune'},
    {Id:2,Name:'Namrata',City:'Kharagpur'},
    {Id:3,Name:'Harsh',City:'Bhopal'},
    {Id:4,Name:'Rishabh',City:'Gwalior'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
