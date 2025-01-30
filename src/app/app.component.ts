import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FeaturedCharactersComponent} from './featured-characters/featured-characters.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from 'rxjs';
import {DisneyCharacter, DisneyCharacterService} from './services/disney-character.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturedCharactersComponent, RouterLink, FooterComponent, FormsModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'disney-challenge wee';
  searchText = '';
  private searchSubject = new Subject<string>();

  searchResults: Observable<DisneyCharacter[]> | null = null;

  disneyCharacterService = inject(DisneyCharacterService);

  ngOnInit(): void {
    this.searchResults = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchText => this.disneyCharacterService.filterByName(searchText))
    );
  }

  search() {
    console.log('search triggereed with', this.searchText);
    this.searchSubject.next(this.searchText);
  }
}
