import { TestBed } from '@angular/core/testing';

import { CurrenciesInfo } from './currencies-api.service';

describe('CurrenciesAPIService', () => {
  let service: CurrenciesInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenciesInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
