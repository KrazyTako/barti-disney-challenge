import {Router, Routes} from '@angular/router';
import {CharacterDetailsComponent} from './character-details/character-details.component';
import {DefaultCharactersComponent} from './default-characters/default-characters.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CharacterSearchResultsComponent} from './character-search-results/character-search-results.component';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';
import {inject} from '@angular/core';
import {UserService} from './services/user.service';

export const routes: Routes = [
  { path: '', component: DefaultCharactersComponent },
  { path: 'search', component: CharacterSearchResultsComponent },
  { path: 'character-details/:characterId', component: CharacterDetailsComponent },
  {
    path: 'view-profile',
    component: UserProfileComponent,
    canActivate: [() => {
      const userInfo = inject(UserService).getCurrentUser();
      const router = inject(Router);
      if (userInfo) {
        return true;
      } else {
        return router.createUrlTree(['/edit-profile']);
      }
    }]
  },
  { path: 'edit-profile', component: EditUserProfileComponent },
];
