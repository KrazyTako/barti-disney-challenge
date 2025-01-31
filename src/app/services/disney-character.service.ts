import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, map, Observable} from 'rxjs';

export interface DisneyApiResults {
  info: DisneyInfo;
  data: DisneyCharacter[];
}

export interface DisneyApiResult {
  info: DisneyInfo;
  data: DisneyCharacter;
}

export interface DisneyInfo {
  count: number;
  nextPage: string | null;
  previousPage: string | null;
  totalPages: number;
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

  private readonly BASE_URL: string = 'https://api.disneyapi.dev';

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets a single Disney character by its ID
   */
  getById(id: number): Observable<DisneyCharacter> {
    return this.httpClient.get<DisneyApiResult>(`${this.BASE_URL}/character/${id}`)
      .pipe(map((response: DisneyApiResult) => response.data));
  }

  /**
   * Gets multiple Disney characters by their IDs
   */
  getByIds(ids: ReadonlyArray<number>): Observable<DisneyCharacter[]> {
    const calls = ids.map(id => this.getById(id));
    return combineLatest(calls);
  }

  /**
   * Filters on the Disney search API by character name contains
   */
  filterByName(name: string): Observable<DisneyApiResults> {
    return this.httpClient.get<DisneyApiResults>(`${this.BASE_URL}/character?name=${name}`)
  }

  getAllCharacters(): Observable<DisneyCharacter[]> {
    return this.httpClient.get<DisneyCharacter[]>(`${this.BASE_URL}/character`);
  }
}
