import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;

  //To control navbar links whether they are clicked or not
  starWarsLinkEnabled: boolean = true;
  filmLinkEnabled: boolean = true;
  characterLinkEnabled: boolean = true;
  planetLinkEnabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
