import { Directive, ElementRef , HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appProductcards]',
  standalone: true
})
export class ProductcardsDirective implements OnChanges {
   @Input()externalColor : string = 'black';
   @Input('appProductcards')defuletColor : string = 'blue'
  constructor(private ele:ElementRef) { 

    this.ele.nativeElement.style.color = 'white'
   this.ele.nativeElement.style.border="1px solid gray";
   this.ele.nativeElement.style.borderRadius = "10px";
   this.ele.nativeElement.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.3)";
  }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor =this.defuletColor;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.ele.nativeElement.style.boxShadow = '4px 4px 10px rgba(0,0,0,0.5)';
   this.ele.nativeElement.style.backgroundColor =this.externalColor;
   }


   @HostListener('mouseleave') onMouseLeave(){
    this.ele.nativeElement.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.3)";
   this.ele.nativeElement.style.backgroundColor =this.defuletColor;
  }




}
