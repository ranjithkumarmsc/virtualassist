import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../model/department/department.module';

@Component({
  selector: 'app-deanview',
  templateUrl: './deanview.component.html',
  styleUrls: ['./deanview.component.css']
})
export class DeanviewComponent implements OnInit {

  @Input()
  public department: Department;
  constructor() { }

  ngOnInit(): void {

    
  }

}
