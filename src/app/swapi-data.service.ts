import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiDataService {

  private FILMS_REST_API_URL = "https://swapi.dev/api/films/";
  private CHARACTER_REST_API_URL = "https://swapi.dev/api/people/";

  constructor(private httpClient: HttpClient) { }
  public getAllFilms(){
    return this.httpClient.get(this.FILMS_REST_API_URL);
  }
  public getAllCharacters(){
    return this.httpClient.get(this.CHARACTER_REST_API_URL);
  }
  public getAllCharactersByID(id){
    return this.httpClient.get(this.CHARACTER_REST_API_URL + id);
  }
  public getByUrl(url){
    return this.httpClient.get(url);
  }
}
