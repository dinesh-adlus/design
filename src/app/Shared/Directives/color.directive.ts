import {Renderer2,HostListener,ElementRef,Directive,Input} from "@angular/core";


@Directive({
  selector: '[colorchange]'
})
export class colorChangeDirective {

  constructor(public el:ElementRef,public renderer:Renderer2) {
  }
 // @Input() enterVal:any;

  @HostListener('mouseenter') onMouseEnter (){
    console.log('the mouse entered');
    this.execFunction('red');
  }
  @HostListener('mouseleave') onMouseLeft (){
    console.log('the mouse left');
    this.execFunction('blue');
  }


  execFunction (color?:string){
    this.renderer.setAttribute(this.el.nativeElement,'id',"readdynamic");
      // this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

}
