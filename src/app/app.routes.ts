import { Routes } from '@angular/router';
import {CharacterDetailsComponent} from './character-details/character-details.component';
import {DefaultCharactersComponent} from './default-characters/default-characters.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CharacterSearchResultsComponent} from './character-search-results/character-search-results.component';

export const routes: Routes = [
  { path: '', component: DefaultCharactersComponent },
  { path: 'character-details/:characterId', component: CharacterDetailsComponent },
  { path: 'view-profile', component: UserProfileComponent },
  { path: 'search', component: CharacterSearchResultsComponent },
];
