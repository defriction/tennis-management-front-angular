import { TestBed } from '@angular/core/testing';

import { PublicTournament } from './public-tournament';

describe('PublicTournament', () => {
  let service: PublicTournament;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicTournament);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
