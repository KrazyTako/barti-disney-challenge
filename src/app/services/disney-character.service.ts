import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AsyncSubject, combineLatest, map, Observable} from 'rxjs';

export interface DisneyApiResult {
  info: DisneyInfo;
  data: DisneyCharacter | DisneyCharacter[];
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

const JAFAR_ID = 3347;
const JASMINE_ID = 3389;
const ALADDIN_ID = 156;
const ABU_ID = 25;
const ELSA_ID = 2099;
const ANNA_ID = 256;
const KRISTOFF_ID = 3771;
const OLAF_ID = 4994;

@Injectable({
  providedIn: 'root'
})
export class DisneyCharacterService {

  /**
   * An AsyncSubject can act as a cache for data that will be fetched once and then reused.
   * Will be loaded once when this service is created and then always return the initial result.
   */
  private defaultCharacters = new AsyncSubject<DisneyCharacter[]>();

  private readonly BASE_URL: string = 'https://api.disneyapi.dev';

  constructor(private httpClient: HttpClient) {
    const defaultCharacterIds = [JAFAR_ID, JASMINE_ID, ALADDIN_ID, ABU_ID, ELSA_ID, ANNA_ID, KRISTOFF_ID, OLAF_ID];
    this.getByIds(defaultCharacterIds).subscribe((defaultCharacters) => {
        this.defaultCharacters.next(defaultCharacters);
        this.defaultCharacters.complete();
    })
  }

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

  /**
   * Gets the default characters
   */
  getDefaultCharacters() {
    return this.defaultCharacters.asObservable();
  }

  /**
   * Filters on the Disney search API by character name contains
   */
  filterByName(name: string): Observable<DisneyApiResult> {
    return this.httpClient.get<DisneyApiResult>(`${this.BASE_URL}/character?name=${name}`)
  }
}
