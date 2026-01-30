import { TestBed } from '@angular/core/testing';

import { PayerRegistration } from './payer-registration';

describe('PayerRegistration', () => {
  let service: PayerRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayerRegistration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
