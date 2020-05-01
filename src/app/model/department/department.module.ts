import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dean } from '../dean/dean.module';
import { Staff } from '../staff/staff.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Department {
  dean:Dean;
  departmentName:String;
  staffList:Staff[];
 }
