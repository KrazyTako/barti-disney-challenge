import { TestBed } from '@angular/core/testing';

import { DisneyCharacterService } from './disney-character.service';

describe('DisneyCharacterService', () => {
  let service: DisneyCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisneyCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
