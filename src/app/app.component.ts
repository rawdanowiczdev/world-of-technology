import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  stars() {
    var COUNT_STAR = 40;
    function rand(limit: number) {
      return Math.random() * limit + 1;
    }
    var stars = document.getElementsByClassName('space')[0];
    for (var i = 0; i < COUNT_STAR; i++) {
      var star = document.createElement('div');
      var style = `left: ${rand(98)}%; top: ${rand(98)}%;`;
      star.className = 'star';
      star.setAttribute('style', style);
      stars.appendChild(star);
    }
  }
}
