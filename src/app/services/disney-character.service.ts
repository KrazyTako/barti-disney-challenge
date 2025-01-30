import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, combineLatestWith, map, Observable, tap} from 'rxjs';

export interface DisneyApiResult {
  info: {};
  data: DisneyCharacter | DisneyCharacter[];
}

export interface DisneyCharacter {
  _id: number;
  url: string;
  name: string;
  sourceUrl: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  alignment: string;
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  imageUrl: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class DisneyCharacterService {

  readonly BASE_URL: string = 'https://api.disneyapi.dev';

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets a single Disney character by its ID
   */
  getById(id: number): Observable<DisneyCharacter> {
    return this.httpClient.get<DisneyApiResult>(`${this.BASE_URL}/character/${id}`)
      .pipe(map((response: DisneyApiResult) => response.data as DisneyCharacter));
  }

  /**
   * Gets multiple Disney characters by their IDs
   */
  getByIds(ids: ReadonlyArray<number>): Observable<DisneyCharacter[]> {
    const calls = ids.map(id => this.getById(id));
    return combineLatest(calls);
  }

  filterByName(name: string): Observable<DisneyCharacter[]> {
    return this.httpClient.get<DisneyCharacter[]>(`${this.BASE_URL}/character?name=${name}`)
  }

  getAllCharacters(): Observable<DisneyCharacter[]> {
    return this.httpClient.get<DisneyCharacter[]>(`${this.BASE_URL}/character`);
  }
}
