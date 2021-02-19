import { TestBed } from '@angular/core/testing';

import { ServiceinjService } from './serviceinj.service';

describe('ServiceinjService', () => {
  let service: ServiceinjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceinjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
