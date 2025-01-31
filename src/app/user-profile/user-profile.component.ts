import {Component, inject, OnInit} from '@angular/core';
import {UserInformation, UserService} from '../services/user.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [
    RouterLink
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  userService = inject(UserService);
  userInfo: UserInformation | null = this.userService.getCurrentUser();

}
