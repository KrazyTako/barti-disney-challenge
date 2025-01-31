import { Routes } from '@angular/router';
import {CharacterDetailsComponent} from './character-details/character-details.component';
import {DefaultCharactersComponent} from './default-characters/default-characters.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CharacterSearchResultsComponent} from './character-search-results/character-search-results.component';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';

export const routes: Routes = [
  { path: '', component: DefaultCharactersComponent },
  { path: 'search', component: CharacterSearchResultsComponent },
  { path: 'character-details/:characterId', component: CharacterDetailsComponent },
  { path: 'view-profile', component: UserProfileComponent },
  { path: 'edit-profile', component: EditUserProfileComponent },
];
