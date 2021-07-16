import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverField]'
})
export class HoverFieldDirective {

  constructor(private elemRef: ElementRef, private render: Renderer2) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.elemRef.nativeElement, 'backgroundColor', '#efeff1')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.elemRef.nativeElement, 'backgroundColor', 'inherit')
  }


}
