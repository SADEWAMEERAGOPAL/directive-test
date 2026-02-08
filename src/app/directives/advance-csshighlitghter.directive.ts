import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceCsshighlitghter]'
})
export class AdvanceCsshighlitghterDirective implements OnInit {
 @Input() getstyle: string='yellow'
  @Input() getclass: string='alert-info'
  constructor(private _eleRef: ElementRef,
    private _rendere: Renderer2
  ) { }


  ngOnInit(): void {
    this._rendere.setStyle(this._eleRef.nativeElement, 'background-color', 'green')
 
  }

  @HostListener('mouseHover')
  OnSearch(){
    this._rendere.setStyle(this._eleRef.nativeElement, 'background-color', 'pink')
  }


  
}
