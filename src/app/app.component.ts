import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ],
  template: '<app-footer></app-footer>',
})
export class AppComponent {
  title = 'Assecor-Frontend';
}

//Added fixed value to reuse it on every components
export let detailsTitle = 'Details:';
