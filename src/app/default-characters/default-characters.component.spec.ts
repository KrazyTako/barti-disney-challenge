import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCharactersComponent } from './default-characters.component';

describe('DefaultCharactersComponent', () => {
  let component: DefaultCharactersComponent;
  let fixture: ComponentFixture<DefaultCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
