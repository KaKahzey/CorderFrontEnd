import { TestBed } from '@angular/core/testing';

import { ShowPopupService } from './show-popup.service';

describe('ShowPopupService', () => {
  let service: ShowPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
