import { ModalService } from './../modal/modal.service';
import { detailsTitle, showMore } from './../../app.component';
import { dissolve } from './../../animations';
import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charaktere-page',
  templateUrl: './charaktere-page.component.html',
  styleUrls: ['./charaktere-page.component.css'],
  animations: [dissolve],
})
export class CharakterePageComponent implements OnInit {
  characters = [];
  showDetail = false;
  selectedCharacter = { filmDetails: [] };
  pageTitel = 'Charaktere';
  detailPageTitle = 'Characterdeatils';
  detailsTitle = detailsTitle;
  showMore = showMore;
  constructor(
    private dataService: SwapiDataService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.dataService.getAllCharacters().subscribe((data: any) => {
      console.log(data);
      this.characters = data.results;
    });
  }
  // when more button on every cards clicked it calls onShowDetail function to show details
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

  //Here is to add producers to datalist to show in input filed
  public producerValue: string;

  producerList = [
    { id: 1, name: 'George Lucas' },
    { id: 2, name: 'Rick McCallum' },
    { id: 3, name: 'Gary Kurtz' },
    { id: 4, name: 'Howard' },
  ];

  public saveProducer(e): void {
    let name = e.target.value;
    let list = this.producerList.filter((x) => x.name === name)[0];
  }
}
