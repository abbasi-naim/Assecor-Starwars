import { AppRoutingModule } from './../../app-routing.module';
import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filme-page',
  templateUrl: './filme-page.component.html',
  styleUrls: ['./filme-page.component.css'],
})
export class FilmePageComponent implements OnInit {
  films = [];
  faCog = faCog;
  showDetail = false;
  selectedFilm = { characterDetails: [] };
  pageTitel = 'Filme';

  constructor(private dataService: SwapiDataService) {}

  ngOnInit() {
    this.dataService.getAllFilms().subscribe((data: any) => {
      console.log(data);
      this.films = data.results;
    });
  }

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
    console.log(this.selectedFilm.characterDetails);
  }

  onHideDetail() {
    this.showDetail = false;
  }
}
