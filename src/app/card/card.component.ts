import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() title = '';
  @Input() userName = '';
  @Input() imageURL = '';
  @Input() content = '';


  constructor() {
    console.log('The constructor was called');
  }

  ngOnInit() {
    console.log('ngOnInit was called');
  }

}

