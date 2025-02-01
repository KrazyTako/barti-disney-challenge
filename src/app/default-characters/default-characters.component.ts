import {Component, inject, OnInit} from '@angular/core';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {DisneyCharacter, DisneyCharacterService} from '../services/disney-character.service';
import {CharacterCardLoadingComponent} from '../character-card-loading/character-card-loading.component';

@Component({
  selector: 'app-default-characters',
  imports: [
    CharacterCardComponent,
    CharacterCardLoadingComponent
  ],
  templateUrl: './default-characters.component.html',
})
export class DefaultCharactersComponent implements OnInit {

  defaultCharacters: DisneyCharacter[] | null = null;

  disneyCharacterService = inject(DisneyCharacterService);

  ngOnInit(): void {
    this.disneyCharacterService.getDefaultCharacters().subscribe(results => {
      this.defaultCharacters = results;
    });
  }
}
