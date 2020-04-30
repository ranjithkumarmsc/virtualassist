import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalviewComponent } from './principalview.component';

describe('PrincipalviewComponent', () => {
  let component: PrincipalviewComponent;
  let fixture: ComponentFixture<PrincipalviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
