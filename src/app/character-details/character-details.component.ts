import {Component, inject, Input, numberAttribute, OnInit} from '@angular/core';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {DisneyCharacter, DisneyCharacterService} from '../services/disney-character.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {

  @Input({transform: numberAttribute})
  set characterId(id: number) {
    this.character = null;
    this.getCharacter(id);
  }

  character: DisneyCharacter | null = null;

  disneyCharacterService = inject(DisneyCharacterService);

  getCharacter(characterId: number) {
    this.disneyCharacterService.getById(characterId).subscribe(character => {
      this.character = character;
    });
  }

}
