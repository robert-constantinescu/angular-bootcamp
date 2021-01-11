import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  searchUrl = 'https://en.wikipedia.org/w/api.php?';

  constructor(private httpClient: HttpClient) { }

  public search(term: string): Observable<any> {
    return this.httpClient.get<any>(this.searchUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}

