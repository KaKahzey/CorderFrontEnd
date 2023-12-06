import { TestBed } from '@angular/core/testing';

import { UserAllDataService } from './user-all-data.service';

describe('UserAllDataService', () => {
  let service: UserAllDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAllDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
