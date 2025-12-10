// import { Component } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, RouterLink],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'projectCompetition';
//   currentYear = new Date().getFullYear();
// }

import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // initial check
    this.isLoggedIn = !!localStorage.getItem('auth_token');

    // 👇 re-check on every successful navigation
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isLoggedIn = !!localStorage.getItem('auth_token');
      });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
