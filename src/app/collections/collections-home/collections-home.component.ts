import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  dataFromCollectionComponent = [
    {name: 'Richie', age: 2, color: 'white & black'},
    {name: 'Basti', age: 2.5, color: 'calypso'},
    {name: 'Ares', age: 1, color: 'black'},
  ];

  headersFromCollectionComponent = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'color', label: 'Color'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
