import {Component, inject, OnInit} from '@angular/core';
import {
  DisneyCharacter,
  DisneyCharacterService,
  DisneyInfo
} from '../services/disney-character.service';
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
  searchResults: DisneyCharacter[] | null = null;
  searchInfo: DisneyInfo | null = null;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchResults = null;
      this.searchText = params['name'];
      this.disneyCharacterService.filterByName(this.searchText).subscribe((results) => {
        this.searchInfo = results.info;
        // Search results that return only 1 item get returned as a single item instead of an array.
        if (Array.isArray(results.data)) {
          this.searchResults = results.data;
        } else {
          this.searchResults = [results.data];
        }
      });
    })
  }

}
