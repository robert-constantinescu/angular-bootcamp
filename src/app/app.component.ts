import {Component} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence: string;
  userString = '';
  textMatch: boolean;


 constructor() {
   console.log(this.randomSentence);
   this.randomSentence = lorem.sentence();
 }

  onUserInput(thisEvent: Event) {
    this.userString = (thisEvent.target as HTMLInputElement).value;
    this.textMatches();
  }

  textMatches() {
   this.textMatch = this.randomSentence === this.userString;
  }


  letterMatches(letter: string, userStringLetter: string) {
    if ( !userStringLetter) {
       return 'pending';
     }
    return letter === userStringLetter ? 'correct' : 'incorrect';
  }
}
