import { TestBed } from '@angular/core/testing';

import { PlayerRegistration } from './player-registration';

describe('PlayerRegistration', () => {
  let service: PlayerRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerRegistration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
