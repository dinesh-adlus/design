 import {Directive, Renderer2, HostListener, ElementRef} from "@angular/core";

 @Directive({
  selector:'[test1]'
 })

 export class colorChange {
  public color:'red';
  constructor(public el:ElementRef,public renderer:Renderer2) {
  }

  @HostListener('mouseenter') onenter (){
    this.renderer.setStyle(this.el.nativeElement,'color',this.color);
  }

 }
