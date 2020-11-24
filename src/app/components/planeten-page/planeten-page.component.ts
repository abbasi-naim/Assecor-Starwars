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
  selector: 'app-planeten-page',
  templateUrl: './planeten-page.component.html',
  styleUrls: ['./planeten-page.component.css'],
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
export class PlanetenPageComponent implements OnInit {
  planets = [];
  showDetail = false;
  selectedPlanet = { filmDetails: [] };
  pageTitel = 'Planeten';
  constructor(private dataService: SwapiDataService) {}

  ngOnInit() {
    this.dataService.getAllPlanets().subscribe((data: any) => {
      console.log(data);
      this.planets = data.results;
    });
  }
  //Add details for each planet
  onShowDetail(t) {
    let filmDetails = [];
    this.selectedPlanet = t;
    this.showDetail = true;
    t.films.forEach((film) => {
      this.dataService.getByUrl(film).subscribe((data: any) => {
        data.url = film;
        filmDetails.push(data);
      });
    });
    this.selectedPlanet.filmDetails = filmDetails;
    console.log(this.selectedPlanet.filmDetails);
  }
  //Hide details when button clicked
  onHideDetail() {
    this.showDetail = false;
  }
}
