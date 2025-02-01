import {Component, inject, OnInit} from '@angular/core';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {DisneyCharacter, DisneyCharacterService} from '../services/disney-character.service';
import {RouterLink} from '@angular/router';
import {CharacterCardLoadingComponent} from '../character-card-loading/character-card-loading.component';

const JAFAR_ID = 3347;
const JASMINE_ID = 3389;
const ALADDIN_ID = 156;
const ABU_ID = 25;
const ELSA_ID = 2099;
const ANNA_ID = 256;
const KRISTOFF_ID = 3771;
const OLAF_ID = 4994;

@Component({
  selector: 'app-default-characters',
  imports: [
    CharacterCardComponent,
    CharacterCardLoadingComponent
  ],
  templateUrl: './default-characters.component.html',
  styleUrl: './default-characters.component.css'
})
export class DefaultCharactersComponent implements OnInit {

  defaultCharacterIds: ReadonlyArray<number> = [JAFAR_ID, JASMINE_ID, ALADDIN_ID, ABU_ID, ELSA_ID, ANNA_ID, KRISTOFF_ID, OLAF_ID];
  defaultCharacters: DisneyCharacter[] | null = null;

  disneyCharacterService = inject(DisneyCharacterService);

  ngOnInit(): void {
    this.disneyCharacterService.getByIds(this.defaultCharacterIds).subscribe(results => {
      this.defaultCharacters = results;
    });
  }
}
