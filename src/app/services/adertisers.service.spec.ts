import { TestBed } from '@angular/core/testing';

import { AdertisersService } from './adertisers.service';

describe('AdertisersService', () => {
  let service: AdertisersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdertisersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
