import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tpgHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}
