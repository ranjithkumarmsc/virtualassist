import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursecomponentComponent } from './coursecomponent/coursecomponent.component';
import { ProfessorviewComponent } from './professorview/professorview.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { DeanviewComponent } from './deanview/deanview.component';
import { PrincipalviewComponent } from './principalview/principalview.component';
import { PaperdetailComponent } from './paperdetail/paperdetail.component';
import { SemesterdetailComponent } from './semesterdetail/semesterdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursecomponentComponent,
    ProfessorviewComponent,
    StudentviewComponent,
    DeanviewComponent,
    PrincipalviewComponent,
    PaperdetailComponent,
    SemesterdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
