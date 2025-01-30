import {Component, Input} from '@angular/core';
import {DisneyCharacter} from '../services/disney-character.service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-character-card',
  imports: [
    RouterLink
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  @Input({required: true})
  character!: DisneyCharacter;

}
