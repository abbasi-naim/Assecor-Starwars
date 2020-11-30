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

  //Here is to add palnetType and createdBy to datalist to show in input filed
  public planetValue: string;
  public createdValue: string;

  planetTypeList = [
    { id: 1, name: 'forests' },
    { id: 2, name: 'desert' },
    { id: 3, name: 'ocean' },
    { id: 4, name: 'grasslands' },
  ];

  createdByList = [
    { id: 1, name: 'George Lucas' },
    { id: 2, name: 'Rick McCallum' },
    { id: 3, name: 'Gary Kurtz' },
    { id: 4, name: 'Howard' },
  ];

  public savePlanet(e): void {
    let name = e.target.value;
    let list = this.planetTypeList.filter((x) => x.name === name)[0];
  }

  public saveCreatedBy(e): void {
    let name = e.target.value;
    let list = this.createdByList.filter((x) => x.name === name)[0];
  }
}
