import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Department } from '../Department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  department:Department[] = [
    {departmentId:11,departmentName:'HR',departmentLocation:'Mumbai'},
    {departmentId:24,departmentName:'Finance',departmentLocation:'Pune'},
    {departmentId:12,departmentName:'Development',departmentLocation:'Bangalore'},
    {departmentId:56,departmentName:'Development',departmentLocation:'Gwalior'}
  ];
    @Output() selectedEmployee:EventEmitter<Department> = new EventEmitter<Department>();
  constructor() { }

  ngOnInit() {
  }
  selectEmployee(dept:Department){
    //console.log(dept);
    this.selectedEmployee.emit(dept);
  }

}
