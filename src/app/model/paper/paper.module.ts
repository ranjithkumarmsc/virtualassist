import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffModule } from '../staff/staff.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PaperModule {
  staff:StaffModule[];
 }
