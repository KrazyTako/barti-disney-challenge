import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserInformation, UserService} from '../services/user.service';

@Component({
  selector: 'app-edit-user-profile',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-user-profile.component.html',
})
export class EditUserProfileComponent {

  userService = inject(UserService);
  router = inject(Router);

  currentUser = this.userService.getCurrentUser();
  formGroup;

  constructor() {
    this.formGroup = new FormGroup({
      firstName: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(50)]),
      dob: new FormControl<Date | null>(null, Validators.required),
      city: new FormControl<string | null>(null, Validators.maxLength(50)),
      state: new FormControl<string | null>(null, Validators.maxLength(50)),
      favoriteCharacter: new FormControl<string | null>(null, Validators.maxLength(50)),
      favoriteRide: new FormControl<string | null>(null, Validators.maxLength(50)),
      favoriteMovie: new FormControl<string | null>(null, Validators.maxLength(50)),
      favoriteDisneyPark: new FormControl<string | null>(null, Validators.maxLength(50)),
    });
    if (this.currentUser) {
      this.formGroup.patchValue(this.currentUser);
    }
  }

  saveProfile() {
    if (this.formGroup.invalid) {
      return;
    }
    this.userService.setCurrentUser(this.formGroup.value as UserInformation);
    return this.router.navigate(['/view-profile']);
  }

  deleteProfile() {
    this.userService.deleteCurrentUser();
    return this.router.navigate(['/']);
  }
}
