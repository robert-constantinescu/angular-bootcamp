import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;

  images = [
    {
      title: 'The Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Time',
      url: 'https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Children',
      url: 'https://images.unsplash.com/photo-1584367369853-8b966cf223f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Sign',
      url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3Jvd3RofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Time',
      url: 'https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Children',
      url: 'https://images.unsplash.com/photo-1584367369853-8b966cf223f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Sign',
      url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3Jvd3RofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Time',
      url: 'https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Children',
      url: 'https://images.unsplash.com/photo-1584367369853-8b966cf223f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Sign',
      url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3Jvd3RofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'The Time',
      url: 'https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Children',
      url: 'https://images.unsplash.com/photo-1584367369853-8b966cf223f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'A Sign',
      url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3Jvd3RofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];


  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
