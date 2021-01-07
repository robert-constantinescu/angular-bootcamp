import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustomClassDirective]'
})
export class CustomClassDirectiveDirective {


  constructor(private element: ElementRef) {
  }

  @Input('appCustomClassDirective')
  set propertyAssignedFromParent(classObj: any) {
    for (const key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
