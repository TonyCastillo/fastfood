import { TestBed } from '@angular/core/testing';

import { PaisesApiServiceService } from './paises-api-service.service';

describe('PaisesApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaisesApiServiceService = TestBed.get(PaisesApiServiceService);
    expect(service).toBeTruthy();
  });
});
