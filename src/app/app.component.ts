import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {FeaturedCharactersComponent} from './featured-characters/featured-characters.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturedCharactersComponent, RouterLink, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  searchText = '';
  private searchSubject = new Subject<string>();


  router = inject(Router);

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((searchString) => {
      if (!searchString || searchString.length === 0) {
        return this.router.navigateByUrl('/');
      }
      return this.router.navigate(['/search'], { queryParams: { name: searchString } });
    });
  }

  search() {
    console.log('search triggered with', this.searchText);
    this.searchSubject.next(this.searchText);
  }
}
