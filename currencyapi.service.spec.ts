import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currencyapi.service';

describe('CurrencyapiService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
