import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    private _renderer: Renderer2,
    private _eleRef: ElementRef
  ) {}

  @HostListener('input', ['$event'])
  ValidatorsCard(eve: Event) {

    let inputControl = eve.target as HTMLInputElement;

  
    let val = inputControl.value.replace(/\s+/g, '');

  
    val = val.replace(/\D/g, '').substring(0, 16);

  
    let finalval = this.formatArr(val);

    inputControl.value = finalval;
  }

  formatArr(str: string) {
    let ChunkArr: Array<string> = [];

    for (let i = 0; i < str.length; i += 4) {
      ChunkArr.push(str.slice(i, i + 4));
    }

    return ChunkArr.join(" ");
  }
}
