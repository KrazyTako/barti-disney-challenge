import { Routes } from '@angular/router';
import {CharacterDetailsComponent} from './character-details/character-details.component';
import {DefaultCharactersComponent} from './default-characters/default-characters.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: DefaultCharactersComponent },
  { path: 'character-details/:characterId', component: CharacterDetailsComponent },
  { path: 'view-profile', component: UserProfileComponent },
];
