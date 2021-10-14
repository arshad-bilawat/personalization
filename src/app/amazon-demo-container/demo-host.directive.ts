import { Directive, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[demoHost]'
})
export class DemoHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
