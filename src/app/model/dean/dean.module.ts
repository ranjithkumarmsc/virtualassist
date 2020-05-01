import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student/student.module';
import { Staff} from '../staff/staff.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Dean {

   professor:Staff;
   student:Student[];
 }
