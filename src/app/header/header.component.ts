import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';

@Component({
  selector: 'app-header',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  searchText = '';
  private searchSubject = new Subject<string>();

  router = inject(Router);

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(800),
      distinctUntilChanged(),
    ).subscribe((searchString) => {
      if (!searchString || searchString.length === 0) {
        return this.router.navigateByUrl('/');
      }
      return this.router.navigate(['/search'], { queryParams: { name: searchString } });
    });
  }

  search() {
    this.searchSubject.next(this.searchText);
  }
}
