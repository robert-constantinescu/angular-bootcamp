import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private accessKey = 'cMVP5A0TBfC9UeljncFP8Du0JrIBt3GJ6CWp47AjfY8';
  private unsplashUrl = 'https://api.unsplash.com/';

  constructor(private httpClient: HttpClient) { }

  getRandomPhoto(): Observable<UnsplashResponse> {
    return this.httpClient.get<UnsplashResponse>(`${this.unsplashUrl}/photos/random`, {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`
        }
      }
    );
  }
}

interface UnsplashResponse {
   urls: {
     regular: string;
   }
}
