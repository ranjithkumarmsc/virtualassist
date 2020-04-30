import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanviewComponent } from './deanview.component';

describe('DeanviewComponent', () => {
  let component: DeanviewComponent;
  let fixture: ComponentFixture<DeanviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
