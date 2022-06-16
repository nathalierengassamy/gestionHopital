import { TestBed } from '@angular/core/testing';

import { TypeRDVService } from './type-rdv.service';

describe('TypeRDVService', () => {
  let service: TypeRDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeRDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
