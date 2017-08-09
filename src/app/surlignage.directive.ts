import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSurlignage]'
})
export class SurlignageDirective {


  @Input('appSurlignage') surCouleur: string;

  private _defaultColor: string = '#252024';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  }

   @HostListener('mouseenter', ['$event']) onMouseEvent() {
     this._renderer.setStyle(this._el.nativeElement, 'color', this.surCouleur);
    
   }
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this._renderer.setStyle(this._el.nativeElement, 'color', this._defaultColor);
  }
}
