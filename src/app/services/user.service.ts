import {Injectable} from '@angular/core';

export interface UserInformation {
  firstName: string;
  lastName: string;
  dob: Date;
  city: string | null;
  state: string | null;
  favoriteCharacter: string | null;
  favoriteRide: string | null;
  favoriteMovie: string | null;
  favoriteDisneyPark: string | null;
  lastUpdated: Date;
}

const COOKIE_NAME = 'userInfo';

@Injectable({providedIn: 'root'})
export class UserService {

  getCurrentUser(): UserInformation | null {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === COOKIE_NAME) {
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch (e) {
          console.error("Error parsing cookie:", e);
        }
      }
    }
    return null;
  }

  setCurrentUser(user: UserInformation) {
    const now = new Date();
    user.lastUpdated = now;
    const jsonString = JSON.stringify(user);
    const daysToExpire = 2;
    now.setTime(now.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + now.toUTCString();
    // console.log(`${COOKIE_NAME}=${encodeURIComponent(jsonString)}${expires}; path=/`)
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(jsonString)}${expires}; path=/`;
  }

  deleteCurrentUser() {
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
