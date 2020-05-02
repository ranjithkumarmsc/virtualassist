import { Injectable } from '@angular/core';
import { Student } from '../student/student.module';

@Injectable({
  providedIn: 'root'
})
export class CoursehelperService {

  constructor() { }
  public getAcademicStudentsList(): Student[] {

    let academicStudentList: Student[] = [];

    let student:Student=new Student;
    
    student.name="Student1";
    student.gender="male";
    student.email="student1@test.com";
    student.mobile="9123456780";
    academicStudentList.push(student);

    let student1:Student=new Student;
    student1.name="Student2";
    student1.gender="male";
    student1.email="student2@test.com";
    student1.mobile="9123456781";
    academicStudentList.push(student1);

    let student2:Student=new Student;
    student2.name="Student3";
    student2.gender="male";
    student2.email="student3@test.com";
    student2.mobile="9123456782";
    academicStudentList.push(student2);

    let student3:Student=new Student;
    student3.name="Student4";
    student3.gender="male";
    student3.email="student4@test.com";
    student3.mobile="9123456783";
    academicStudentList.push(student3);

    let student4:Student=new Student;
    student4.name="Student4";
    student4.gender="male";
    student4.email="student4@test.com";
    student4.mobile="9123456784";
    academicStudentList.push(student4);

    return academicStudentList;
  }

}
