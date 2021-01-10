import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  showModal = false;
  items = [
    {title: 'What is the human purpose?', content: 'Need to research more'},
    {title: 'Does alien life exists?', content: 'dasdasdasdasdasdasdasd asd asdasda sdas gggjgfhaf'},
    {title: 'What is the cat doing?', content: 'chunk {mods-mods-module} mods-mods-module.js, mods-mods-module.js.map (mods-mods-module) 20.4 kB  [rendered]\n'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @Output('onShowModal') onShowModal() {
    this.showModal = !this.showModal;
  }
}
