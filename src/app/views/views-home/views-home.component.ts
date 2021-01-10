import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: 'Users'},
    { value: 9000, label: 'Revenue'},
    { value: 85, label: 'Reviews'}
  ];

  items = [
    {image: '/assets/images/couch.jpeg', title: 'Couch', description: 'Confy Couch'},
    {image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'Big Dresser'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
