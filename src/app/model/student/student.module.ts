import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paper } from '../paper/paper.module';
import { Department } from 'src/app/model/department/department.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Student { 
 paper:Paper[]=[];
 department:Department;
}
