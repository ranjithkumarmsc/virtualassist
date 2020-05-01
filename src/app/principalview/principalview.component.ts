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

  public departments:Department[]=[];
  constructor() { }

  ngOnInit(): void {
    let department:Department=new Department;
    let staff:Staff=new Staff;
    staff.designation="Assistant Professor";
    staff.name="Usha";
    staff.qualification="Msc Bed MPhil"
    staff.labStaff=false;
    staff.branchOfStudy="Mathematics";
    staff.staffId=100100;
    department.departmentName="Mathematics";
    department.staffList.push(staff);
    

    //let department1:Department=new Department;
    let staff1:Staff=new Staff;;
    staff1.designation="Lecturer";
    staff1.name="Maths Staff2";
    staff1.staffId=100101;
    staff1.qualification="Bsc"
    staff1.labStaff=false;
    staff1.branchOfStudy="Mathematics"
  //  department1.departmentName="Mathematics";
    department.staffList.push(staff1);
  //  this.departments.push(department1); 

    //let department2:Department=new Department;
    let staff2:Staff=new Staff;;
    staff2.designation="Assistant Professor";
    staff2.name="Maths Staff3";
    staff2.staffId=100102;
    staff2.qualification="Msc"
    staff2.labStaff=false;
    staff2.branchOfStudy="Mathematics"
    //department2.departmentName="Mathematics";
    department.staffList.push(staff2);
    //this.departments.push(department2); 
    
    this.departments.push(department); 

  }

}
