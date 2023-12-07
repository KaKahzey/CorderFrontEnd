import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cycleGuard } from './cycle.guard';

describe('cycleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cycleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
