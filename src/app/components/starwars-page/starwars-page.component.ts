import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  style,
  useAnimation,
} from '@angular/animations';

@Component({
  selector: 'app-starwars-page',
  templateUrl: './starwars-page.component.html',
  styleUrls: ['./starwars-page.component.css'],
  animations: [
    trigger('Tap', [
      // The '* => *' will trigger the animation to change between any two states
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s'),
        style({ opacity: 1 }),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-out'),
        style({ opacity: 0 }),
      ]),
    ]),
  ],
})
export class StarwarsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
