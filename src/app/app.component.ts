import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FeaturedCharactersComponent} from './featured-characters/featured-characters.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturedCharactersComponent, FooterComponent, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
