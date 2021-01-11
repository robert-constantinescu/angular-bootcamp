import { Component } from '@angular/core';
import {WikipediaService} from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pagesWikipedia = [];

  constructor(private wikipediaService: WikipediaService) {
  }

  onSubmitSearch(searchTerm: string) {
    this.wikipediaService.search(searchTerm).subscribe(
      (data: any) => {
        this.pagesWikipedia = data.query.search;
      }
    );

  }
}
