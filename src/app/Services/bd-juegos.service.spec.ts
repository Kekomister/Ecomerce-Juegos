import { TestBed } from '@angular/core/testing';

import { BdJuegosService } from './bd-juegos.service';

describe('BdJuegosService', () => {
  let service: BdJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
