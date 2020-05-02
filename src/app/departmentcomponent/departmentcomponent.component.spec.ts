import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentcomponentComponent } from './departmentcomponent.component';

describe('DepartmentcomponentComponent', () => {
  let component: DepartmentcomponentComponent;
  let fixture: ComponentFixture<DepartmentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
