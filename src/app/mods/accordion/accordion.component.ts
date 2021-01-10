import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() itemsList = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateIndex(i: number) {
    if (i === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = i;
    }
  }
}

