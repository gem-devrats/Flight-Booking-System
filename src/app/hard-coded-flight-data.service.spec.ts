import { TestBed } from '@angular/core/testing';

import { HardCodedFlightDataService } from './hard-coded-flight-data.service';

describe('HardCodedFlightDataService', () => {
  let service: HardCodedFlightDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedFlightDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
