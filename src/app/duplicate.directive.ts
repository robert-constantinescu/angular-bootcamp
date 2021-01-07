import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {
    console.log(viewContainer);
    console.log(templateRef);
  }

    @Input('appDuplicate')
    set render(timesToDuplicate: number) {
      this.viewContainer.clear(); // will delete everything that is inside the viewContainer
                                  // ( inside <ul> tag in this case)

      for (let i = 0; i < timesToDuplicate; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          index: i,
          color: 'red'
        });
      }
    }

}

