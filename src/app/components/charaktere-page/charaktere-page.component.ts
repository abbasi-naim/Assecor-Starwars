import { transAnimation } from './../../animations';
import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  style,
  useAnimation,
} from '@angular/animations';
@Component({
  selector: 'app-charaktere-page',
  templateUrl: './charaktere-page.component.html',
  styleUrls: ['./charaktere-page.component.css'],
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
//   animations: [
//     trigger('Tap', [
//       // The '* => *' will trigger the animation to change between any two states
//       transition(':enter', [
//         useAnimation(transAnimation, {
//           params: {
//             opacityIn: 0,
//             time: '6s',
//             opacityOut: 1,
//           },
//         }),
//       ]),
//       transition(':leave', [
//         useAnimation(transAnimation, {
//           params: {
//             opacityOut: 1,
//             time: '6s',
//             opacityIn: 0,
//           },
//         }),
//       ]),
//     ]),
//   ],
// })
export class CharakterePageComponent implements OnInit {
  characters = [];
  showDetail = false;
  selectedCharacter = { filmDetails: [] };
  pageTitel = 'Charaktere';
  constructor(private dataService: SwapiDataService) {}

  ngOnInit() {
    this.dataService.getAllCharacters().subscribe((data: any) => {
      console.log(data);
      this.characters = data.results;
    });
  }
  onShowDetail(t) {
    let filmDetails = [];
    this.selectedCharacter = t;
    this.showDetail = true;
    t.films.forEach((film) => {
      this.dataService.getByUrl(film).subscribe((data: any) => {
        data.url = film;
        filmDetails.push(data);
      });
    });
    this.selectedCharacter.filmDetails = filmDetails;
    console.log(this.selectedCharacter.filmDetails);
  }
  onHideDetail() {
    this.showDetail = false;
  }
}
