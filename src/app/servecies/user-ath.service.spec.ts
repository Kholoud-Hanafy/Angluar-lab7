import { TestBed } from '@angular/core/testing';

import { UserAthService } from './user-ath.service';

describe('UserAthService', () => {
  let service: UserAthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
