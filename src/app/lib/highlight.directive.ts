import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[tpgHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input()
  tpgHighlight?: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tpgHighlight) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'background-color');
    }
  }
}
