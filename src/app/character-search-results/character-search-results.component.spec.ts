import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchResultsComponent } from './character-search-results.component';

describe('CharacterSearchResultsComponent', () => {
  let component: CharacterSearchResultsComponent;
  let fixture: ComponentFixture<CharacterSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSearchResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
