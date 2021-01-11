import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitSearch = new EventEmitter<string>();
  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  onNewInput(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    // console.log(this.searchTerm);
    this.submitSearch.emit(this.searchTerm);
  }
}
