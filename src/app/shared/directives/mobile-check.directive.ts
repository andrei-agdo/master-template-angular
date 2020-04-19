import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hideMobile]'
})
export class MobileCheckDirective {

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
    if (window.innerWidth < 640)
      this.element.nativeElement.classList.add('hide-mobile');
    else
      this.element.nativeElement.classList.remove('hide-mobile');
  }

}
