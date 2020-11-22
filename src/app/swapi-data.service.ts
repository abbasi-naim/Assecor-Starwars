import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

//Add  StarWars API URL
export class SwapiDataService {
  private FILMS_REST_API_URL = 'https://swapi.dev/api/films/';
  private CHARACTER_REST_API_URL = 'https://swapi.dev/api/people/';
  private PLANET_REST_API_URL = 'https://swapi.dev/api/planets/';

  constructor(private httpClient: HttpClient) {}

  //Add Function to get all films Data
  public getAllFilms() {
    return this.httpClient.get(this.FILMS_REST_API_URL);
  }

  //Add Function to get all Character Data
  public getAllCharacters() {
    return this.httpClient.get(this.CHARACTER_REST_API_URL);
  }

  //Add Function to get all Character Data by their IDs
  public getAllCharactersByID(id) {
    return this.httpClient.get(this.CHARACTER_REST_API_URL + id);
  }

  //Add Function to get all Planet Data
  public getAllPlanets() {
    return this.httpClient.get(this.PLANET_REST_API_URL);
  }

  public getByUrl(url) {
    return this.httpClient.get(url);
  }
}
