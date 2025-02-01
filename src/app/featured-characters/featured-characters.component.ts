import {Component, inject, OnInit} from '@angular/core';
import {DisneyCharacter, DisneyCharacterService} from '../services/disney-character.service';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {CharacterCardLoadingComponent} from '../character-card-loading/character-card-loading.component';

const MICKEY_MOUSE_ID = 4703;
const BEAST_ID = 544;
const BELLE_ID = 571;
const DONAL_DUCK_ID = 1947;

@Component({
  selector: 'app-featured-characters',
  imports: [
    CharacterCardComponent,
    CharacterCardLoadingComponent
  ],
  templateUrl: './featured-characters.component.html',
  styleUrl: './featured-characters.component.css'
})
export class FeaturedCharactersComponent implements OnInit {

  featuredCharacterIds: ReadonlyArray<number> = [BELLE_ID, BEAST_ID, MICKEY_MOUSE_ID, DONAL_DUCK_ID];
  featuredCharacters: DisneyCharacter[] | null = null;

  disneyCharacterService = inject(DisneyCharacterService);

  ngOnInit(): void {
    this.disneyCharacterService.getByIds(this.featuredCharacterIds).subscribe(results => {
      this.featuredCharacters = results;
    });
  }
}
