import { dissolve } from './../../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starwars-page',
  templateUrl: './starwars-page.component.html',
  styleUrls: ['./starwars-page.component.css'],
  animations: [dissolve],
})
export class StarwarsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
