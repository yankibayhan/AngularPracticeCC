import { TestBed } from '@angular/core/testing';

import { ActivationGuardGuard } from './activation-guard.guard';

describe('ActivationGuardGuard', () => {
  let guard: ActivationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
