import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {FeaturedCharactersComponent} from './featured-characters/featured-characters.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap} from 'rxjs';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturedCharactersComponent, RouterLink, FooterComponent, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
