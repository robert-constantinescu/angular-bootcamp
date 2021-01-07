import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomClassDirectiveDirective } from './custom-class-directive.directive';
import { DuplicateDirective } from './duplicate.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomClassDirectiveDirective,
    DuplicateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
