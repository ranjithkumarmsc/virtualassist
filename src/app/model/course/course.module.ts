import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Semester } from '../semester/semester.module';
import { Department } from '../department/department.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Course { 
  coursename:String;
  durationinyears:Number;
  semesters:Semester[];
  department:Department;
}
