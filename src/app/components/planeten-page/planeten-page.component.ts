import { ModalService } from './../modal/modal.service';
import { detailsTitle, showMore } from './../../app.component';
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
  detailPageTitle = 'Planetendeatils';
  detailsTitle = detailsTitle;
  showMore = showMore;

  constructor(
    private dataService: SwapiDataService,
    private modalService: ModalService
  ) {}

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
    //add this code to not showing page titel on details page
    this.pageTitel = '';
  }
  /*when hide button on datails page clicked it calls 
  onHideDetail function to go back to main page and hide details*/
  onHideDetail() {
    this.showDetail = false;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
