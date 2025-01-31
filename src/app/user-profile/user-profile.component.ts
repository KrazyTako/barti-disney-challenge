import {Component, inject} from '@angular/core';
import {UserInformation, UserService} from '../services/user.service';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  userService = inject(UserService);
  userInfo: UserInformation | null = this.userService.getCurrentUser();

}
