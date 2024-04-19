import { TestBed } from '@angular/core/testing';

import { StaticservicesService } from './staticservices.service';

describe('StaticservicesService', () => {
  let service: StaticservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
