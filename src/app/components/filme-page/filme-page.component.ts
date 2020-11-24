import { AppRoutingModule } from './../../app-routing.module';
import { SwapiDataService } from './../../swapi-data.service';
import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  animate,
  transition,
  style,
  useAnimation,
} from '@angular/animations';

@Component({
  selector: 'app-filme-page',
  templateUrl: './filme-page.component.html',
  styleUrls: ['./filme-page.component.css'],
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
