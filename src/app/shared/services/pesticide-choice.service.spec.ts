import { TestBed } from '@angular/core/testing';

import { PesticideChoiceService } from './pesticide-choice.service';

describe('PesticideChoiceService', () => {
  let service: PesticideChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesticideChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
