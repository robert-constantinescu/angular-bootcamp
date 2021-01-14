import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  photoUrl = 'https://images.unsplash.com/photo-1610344043536-50db34752300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTgzODJ8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080';

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  getRandomPhoto() {
    this.photoService.getRandomPhoto().subscribe(
      data => {
        console.log(data);
        this.photoUrl = data.urls.regular;
      }
    );
  }

}
