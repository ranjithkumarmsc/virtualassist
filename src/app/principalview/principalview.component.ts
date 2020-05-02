import { Component, OnInit, Output } from '@angular/core';
import { Dean } from '../model/dean/dean.module';
import { Department } from '../model/department/department.module';
import { Staff } from '../model/staff/staff.module';

@Component({
  selector: 'app-principalview',
  templateUrl: './principalview.component.html',
  styleUrls: ['./principalview.component.css']
})
export class PrincipalviewComponent implements OnInit {

  public departments:Department[]=[];
  @Output()
  public department:Department;
  constructor() { }

  ngOnInit(): void {
    let department:Department=new Department;
    let staff:Staff=new Staff;
    staff.designation="Assistant Professor";
    staff.name="Usha";
    staff.qualification="Msc Bed MPhil"
    staff.labStaff=false;
    staff.branchOfStudy="Mathematics";
    staff.staffId=100100;
    department.departmentName="Mathematics";
    department.staffList.push(staff);
    

    //let department1:Department=new Department;
    let staff1:Staff=new Staff;;
    staff1.designation="Lecturer";
    staff1.name="Maths Staff2";
    staff1.staffId=100101;
    staff1.qualification="Bsc"
    staff1.labStaff=false;
    staff1.branchOfStudy="Mathematics"
  //  department1.departmentName="Mathematics";
    department.staffList.push(staff1);
  //  this.departments.push(department1); 

    //let department2:Department=new Department;
    let staff2:Staff=new Staff;;
    staff2.designation="Assistant Professor";
    staff2.name="Maths Staff3";
    staff2.staffId=100102;
    staff2.qualification="Msc"
    staff2.labStaff=false;
    staff2.branchOfStudy="Mathematics"
    //department2.departmentName="Mathematics";
    department.staffList.push(staff2);
    //this.departments.push(department2); 
    
    

      let computerdept1:Department=new Department;
      let csstaff:Staff=new Staff;
      csstaff.designation="Assistant Professor";
      csstaff.name="Siva";
      csstaff.qualification="MCA MPhil"
      csstaff.labStaff=false;
      csstaff.branchOfStudy="computer science";
      csstaff.staffId=100104;
      computerdept1.departmentName="Computer Science";
      computerdept1.staffList.push(csstaff);       

      let csstaff2:Staff=new Staff;
      csstaff2.designation="Assistant Professor";
      csstaff2.name="Rajesh";
      csstaff2.qualification="MCA MPhil"
      csstaff2.labStaff=false;
      csstaff2.branchOfStudy="computer science";
      csstaff2.staffId=100105;
      computerdept1.departmentName="Computer Science";
      computerdept1.staffList.push(csstaff2);

      let csstaff3:Staff=new Staff;
      csstaff3.designation="Assistant Professor";
      csstaff3.name="Marimuthu";
      csstaff3.qualification="MCA MPhil"
      csstaff3.labStaff=false;
      csstaff3.branchOfStudy="computer science";
      csstaff3.staffId=100106;
      computerdept1.departmentName="Computer Science";
      computerdept1.staffList.push(csstaff3);

      let physicsdept1:Department=new Department;
      let phystaff:Staff=new Staff;
      phystaff.designation="Assistant Professor";
      phystaff.name="Jeeva";
      phystaff.qualification="Msc MPhil"
      phystaff.labStaff=false;
      phystaff.branchOfStudy="Physics";
      phystaff.staffId=100107;
      physicsdept1.departmentName="Physics";
      physicsdept1.staffList.push(phystaff);

      let phystaff1:Staff=new Staff;
      phystaff1.designation="Assistant Professor";
      phystaff1.name="Yasar";
      phystaff1.qualification="MCA MPhil"
      phystaff1.labStaff=false;
      phystaff1.branchOfStudy="Physics";
      phystaff1.staffId=100108;
      physicsdept1.staffList.push(phystaff1);

      let phystaff2:Staff=new Staff;
      phystaff2.designation="Assistant Professor";
      phystaff2.name="Charles";
      phystaff2.qualification="Msc MPhil"
      phystaff2.labStaff=false;
      phystaff2.branchOfStudy="Physics";
      phystaff2.staffId=100109;
      physicsdept1.staffList.push(phystaff2);

department.departmentCode="mm001";
computerdept1.departmentCode="cs002";
physicsdept1.departmentCode="ps003";

      this.departments.push(department); 
    this.departments.push(computerdept1);
    this.departments.push(physicsdept1);
    this.department=department;



  }

}
