import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
  beforeEach((): any => TestBed.configureTestingModule({}));

  it('should be created', (): any => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });
});
