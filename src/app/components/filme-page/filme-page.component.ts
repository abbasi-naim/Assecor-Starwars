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

  //Here is to add colors to datalist to show in input filed
  public colorValue: string;
  public augenValue: string;

  colorList = [
    { id: 1, name: 'Gelb', hexCode: '#FFFF00' },
    { id: 2, name: 'Rot', hexCode: '#FF0000' },
    { id: 3, name: 'Orange', hexCode: '#FF5733' },
    { id: 4, name: 'blau', hexCode: '#0000FF' },
    { id: 5, name: 'Grün', hexCode: '#008000' },
  ];

  augenColorList = [
    { id: 1, name: 'Gelb', hexCode: '#FFFF00' },
    { id: 2, name: 'Rot', hexCode: '#FF0000' },
    { id: 3, name: 'Orange', hexCode: '#FF5733' },
    { id: 4, name: 'blau', hexCode: '#0000FF' },
    { id: 5, name: 'Grün', hexCode: '#008000' },
  ];

  public saveAugenColor(e): void {
    let name = e.target.value;
    let list = this.augenColorList.filter((x) => x.name === name)[0];
  }
  public saveColor(e): void {
    let name = e.target.value;
    let list = this.colorList.filter((x) => x.name === name)[0];
  }
}
