import { ModalService } from './../modal/modal.service';
import { detailsTitle, showMore } from './../../app.component';
import { dissolve } from './../../animations';
import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filme-page',
  templateUrl: './filme-page.component.html',
  styleUrls: ['./filme-page.component.css'],
  animations: [dissolve],
})
export class FilmePageComponent implements OnInit {
  films = [];
  faCog = faCog;
  showDetail = false;
  selectedFilm = { characterDetails: [] };
  pageTitel = 'Filme';
  detailPageTitle = 'Filmdetails';
  detailsTitle = detailsTitle;
  showMore = showMore;

  constructor(
    private dataService: SwapiDataService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.dataService.getAllFilms().subscribe((data: any) => {
      console.log(data);
      this.films = data.results;
    });
  }
  // when more button on every cards clicked it calls onShowDetail function to show details
  onShowDetail(t) {
    let characterDetails = [];
    this.selectedFilm = t;
    this.showDetail = true;
    t.characters.forEach((character) => {
      this.dataService.getByUrl(character).subscribe((data: any) => {
        data.url = character;
        characterDetails.push(data);
      });
    });
    this.selectedFilm.characterDetails = characterDetails;
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
