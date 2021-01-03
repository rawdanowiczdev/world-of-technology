import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
