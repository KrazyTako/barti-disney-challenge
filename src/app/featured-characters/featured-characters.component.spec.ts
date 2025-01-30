import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCharactersComponent } from './featured-characters.component';

describe('FeaturedCharactersComponent', () => {
  let component: FeaturedCharactersComponent;
  let fixture: ComponentFixture<FeaturedCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
