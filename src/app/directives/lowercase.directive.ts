import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor(private _eleRef: ElementRef) { }


  @HostListener('keyup', ['$event'])
  OnSerach(eve : Event){
  let  inputControl=  eve.target as HTMLInputElement

 let lowercase= inputControl.value.toLowerCase()

 inputControl.value=lowercase

 
 
  }
}
