import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Batchdetails {
  batchId:number;
  batchStartingYear:number;
  batchEndingYear:number;
  batchStartingMonth:number;
  batchEndingMonth:number;
}
