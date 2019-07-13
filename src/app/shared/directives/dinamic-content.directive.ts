import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dinamicContent]'
})
export class DinamicContDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}
