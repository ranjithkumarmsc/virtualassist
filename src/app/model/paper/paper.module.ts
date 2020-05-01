import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Staff } from '../staff/staff.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Paper {
  staff:Staff[];
 }
