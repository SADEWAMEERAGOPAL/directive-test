import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCsshighlither]'
})
export class CsshighlitherDirective implements OnInit {
 @Input() setcolor: string='yellowgreen'
  constructor(private _eleRef: ElementRef,
  
  ) { }


  ngOnInit(): void {
this._eleRef.nativeElement.style.backgroundColor=this.setcolor
this._eleRef.nativeElement.style.padding='15px',
this._eleRef.nativeElement.style.color='white'









  }
  
}
