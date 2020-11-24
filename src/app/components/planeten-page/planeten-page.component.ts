import { dissolve } from './../../animations';
import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planeten-page',
  templateUrl: './planeten-page.component.html',
  styleUrls: ['./planeten-page.component.css'],
  animations: [dissolve],
})
export class PlanetenPageComponent implements OnInit {
  planets = [];
  showDetail = false;
  selectedPlanet = { filmDetails: [] };
  pageTitel = 'Planeten';
  constructor(private dataService: SwapiDataService) {}

  //retrieve all data related to endpoint
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
