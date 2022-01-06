import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightligh]'
})
export class HightlighDirective {

  constructor(
    Element: ElementRef
  ) { 
    Element.nativeElement.style.backgroundColor= 'red';
  }

}
