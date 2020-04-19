import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hideIpad]'
})
export class IpadCheckDirective {

  private element: ElementRef;

  @HostListener('window:resize')
  onResize() {
    this.checkSize();
  }

  constructor(el: ElementRef) {
    this.element = el;
    this.checkSize();
  }

  private checkSize() {
    if (window.innerWidth < 1024)
      this.element.nativeElement.classList.add('hide-ipad');
    else
      this.element.nativeElement.classList.remove('hide-ipad');
  }

}
