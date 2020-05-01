import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentModule } from '../student/student.module';
import { StaffModule } from '../staff/staff.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DeanModule {

   professor:StaffModule;
   student:StudentModule[];
 }
