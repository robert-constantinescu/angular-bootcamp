import { Component } from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {title: 'tree', userName: '@richie', imageURL: '/assets/images/tree.jpeg', content: 'a nice tree'},
    {title: 'bike', userName: '@robert', imageURL: '/assets/images/biking.jpeg', content: 'a nice BIKE'},
    {title: 'mountain', userName: '@diana', imageURL: '/assets/images/mountain.jpeg', content: 'a snowy mountain'}
  ];

}
