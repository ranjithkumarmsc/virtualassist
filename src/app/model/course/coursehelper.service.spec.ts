import { TestBed } from '@angular/core/testing';

import { CoursehelperService } from './coursehelper.service';

describe('CoursehelperService', () => {
  let service: CoursehelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursehelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
