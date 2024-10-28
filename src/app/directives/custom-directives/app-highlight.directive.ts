import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]', // This selector allows you to use the directive as an attribute
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'green';

  private defaultColor: string = 'transparent';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(this.defaultColor);
  }

  @HostListener('click') onMouseClick() {
    this.changeBackgroundColor(this.defaultColor);
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
