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
  public dean:Dean;
  public departmentName:String;
  public staffList:Staff[]=[];
  public departmentCode:String;
}
