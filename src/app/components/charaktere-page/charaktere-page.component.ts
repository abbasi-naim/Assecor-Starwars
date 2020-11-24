import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-charaktere-page',
  templateUrl: './charaktere-page.component.html',
  styleUrls: ['./charaktere-page.component.css'],
})
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
