import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceCsshighlitghter]'
})
export class AdvanceCsshighlitghterDirective implements OnInit {
  @Input() defaultColor: string= 'red'
  @Input() hovercolor: string= 'green'

  

  @HostBinding('style.backgroundColor')
    bgColor: string= this.defaultColor

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

  @HostListener('mouseover')
onMouseHover() {
  // this._renderer.setStyle(
  //   this._eleRef.nativeElement,
  //   'background-color',
  //   'orange'
  // );

  this.bgColor=this.hovercolor
}

@HostListener('mouseout')
onMouseOut(){
  this._rendere.setStyle(this._eleRef.nativeElement, 'background-color', this.defaultColor)

  this.bgColor=this.hovercolor
}
  
}
