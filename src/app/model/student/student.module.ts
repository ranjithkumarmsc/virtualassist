import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperModule } from '../paper/paper.module';
import { DepartmentModule } from 'src/app/model/department/department.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentModule { 
 paper:PaperModule[];
 department:DepartmentModule;
}
