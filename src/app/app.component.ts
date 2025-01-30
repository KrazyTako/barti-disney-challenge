import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CharacterCardComponent} from './character-card/character-card.component';
import {DefaultCharactersComponent} from './default-characters/default-characters.component';
import {FeaturedCharactersComponent} from './featured-characters/featured-characters.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterCardComponent, DefaultCharactersComponent, FeaturedCharactersComponent, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'disney-challenge wee';

  ngOnInit(): void {
  }
}
