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
  name:String;
  dateOfBirth:String;
   age:number;
   gender:String;
   mobile:String;
   email:String;
   fathername:String;
   mothername:String;
   primaryemergencycontactphone:String;
   primaryemergencycontactperson:String;
   secondaryemergencycontactphone:String;
   secondaryemergencycontactperson:String;
   addressline1:String;
   addressline2:String;
   addressline3:String;
   city:String;
   district:String;
   state:String;
   pincode:number;

  

 paper:Paper[]=[];
 department:Department;
}
