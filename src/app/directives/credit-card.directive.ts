import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(private _renderer: Renderer2,
    private _eleRef: ElementRef
  ) { }

  @HostListener('keyup', ['$event'])

  ValidatorsCard(eve:Event){
    let inputControl= eve.target as HTMLInputElement
    this.createErrorContainer(inputControl)
    let val=inputControl.value.replace(/\s+/, '')

 if(val.length>16){
val=val.substring(0,16)
}

if(/[^\d]/.test(val)){
  inputControl.nextElementSibling?.classList.remove('d-none')
}else{
  inputControl.nextElementSibling?.classList.add('d-none')
}
   
let ChunkArr=[]
let finalval= this.formatArr(val)
inputControl.value=finalval
console.log(finalval)


}


  formatArr(str: string){
    let ChunkArr: Array<string>=[]

    for(let i=0; i<str.length; i=i+4){
       
       ChunkArr.push(str.slice(i, i+4))
    }
     
    return ChunkArr.join(" ")

  }


  createErrorContainer(control: HTMLInputElement){
       let strong=document.createElement('strong')
       strong.className='text-danger d-none'
       strong.innerText='invalid card details'
       
       control.parentElement?.append(strong)
  }

  ngOnInit(): void {
    this.createErrorContainer(this._renderer.parentNode(this._eleRef.nativeElement))
  }
}

