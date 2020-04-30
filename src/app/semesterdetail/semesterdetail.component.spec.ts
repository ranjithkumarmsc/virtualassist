import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterdetailComponent } from './semesterdetail.component';

describe('SemesterdetailComponent', () => {
  let component: SemesterdetailComponent;
  let fixture: ComponentFixture<SemesterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
