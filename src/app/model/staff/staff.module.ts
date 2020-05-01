import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paper } from '../paper/paper.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Staff { 
  staffId:number;
  name:String;
  qualification:String;
  teachingStaff:boolean;
  labStaff:boolean;
  designation:String;
  branchOfStudy:String;
  paperList:Paper;
}
