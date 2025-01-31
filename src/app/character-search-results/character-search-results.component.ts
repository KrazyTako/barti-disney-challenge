import {Component, inject, OnInit} from '@angular/core';
import {DisneyApiResults, DisneyCharacterService} from '../services/disney-character.service';
import {CharacterCardComponent} from '../character-card/character-card.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-search-results',
  imports: [
    CharacterCardComponent
  ],
  templateUrl: './character-search-results.component.html',
  styleUrl: './character-search-results.component.css'
})
export class CharacterSearchResultsComponent implements OnInit {

  searchText = '';
  activatedRoute = inject(ActivatedRoute);
  disneyCharacterService = inject(DisneyCharacterService);
  searchResults: DisneyApiResults | null = null;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['name'];
      this.disneyCharacterService.filterByName(this.searchText).subscribe((results) => {
        console.log(results);
        this.searchResults = results;
      });
    })
  }

}
