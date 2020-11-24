import {
  trigger,
  animate,
  transition,
  style,
  useAnimation,
} from '@angular/animations';

//added animation for fade in in each page
export let dissolve = trigger('Tap', [
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
]);
