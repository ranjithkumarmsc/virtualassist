import { Component, OnInit } from '@angular/core';
import { Dean } from '../model/dean/dean.module';
import { Department } from '../model/department/department.module';
import { Staff } from '../model/staff/staff.module';

@Component({
  selector: 'app-principalview',
  templateUrl: './principalview.component.html',
  styleUrls: ['./principalview.component.css']
})
export class PrincipalviewComponent implements OnInit {

  departments:Department[];
  constructor() { }

  ngOnInit(): void {
    let department:Department=new Department;
    let staff:Staff;
    
    department.departmentName="Mathematics";
    

     
  }

}
