import { TestBed } from '@angular/core/testing';

import { LibFideicoService } from './lib-fideico.service';

describe('LibFideicoService', () => {
  let service: LibFideicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibFideicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
