import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student/student.module';
import { CoursehelperService } from '../model/course/coursehelper.service';
//import { Observable, Subject, throwError} from 'rxjs';
//import { map } from 'rxjs/operators';
@Component({
  selector: 'app-departmentcomponent',
  templateUrl: './departmentcomponent.component.html',
  styleUrls: ['./departmentcomponent.component.css']
})
export class DepartmentcomponentComponent implements OnInit {
  departmentStudent:Student[]=[];
  public departmentStudentMap: Map<String,Student[]>=new Map<String,Student[]>();
  alliedStudentMap: Map<String,Student[]>=new Map<String,Student[]>();
  privateStudentsMap: Map<String,Student[]>=new Map<String,Student[]>();
  departmentStudentsExtraCourseMap: Map<String,Student[]>=new Map<String,Student[]>();
  alliedStudentsExtraCoursesMap: Map<String,Student[]>=new Map<String,Student[]>();
  coursehelper:CoursehelperService=new CoursehelperService;
  studentList:Student[];

  constructor() { }
     
   
  ngOnInit(): void {
    
    let students:Student[]=this.coursehelper.getAcademicStudentsList();
    this.studentList=students;
    console.log(students);
  }

}
