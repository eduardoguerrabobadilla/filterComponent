import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { DatePipe } from '@angular/common';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [DatePipe],
    });
    service = TestBed.inject(FilterService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
