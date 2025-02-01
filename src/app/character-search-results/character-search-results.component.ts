import {Component, inject, OnInit} from '@angular/core';
import {DisneyApiResults, DisneyCharacterService} from '../services/disney-character.service';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {ActivatedRoute} from '@angular/router';
import {CharacterCardLoadingComponent} from '../character-card-loading/character-card-loading.component';

@Component({
  selector: 'app-character-search-results',
  imports: [
    CharacterCardComponent,
    CharacterCardLoadingComponent
  ],
  templateUrl: './character-search-results.component.html',
})
export class CharacterSearchResultsComponent implements OnInit {

  searchText = '';
  activatedRoute = inject(ActivatedRoute);
  disneyCharacterService = inject(DisneyCharacterService);
  searchResults: DisneyApiResults | null = null;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchResults = null;
      this.searchText = params['name'];
      this.disneyCharacterService.filterByName(this.searchText).subscribe((results) => {
        this.searchResults = results;
      });
    })
  }

}
