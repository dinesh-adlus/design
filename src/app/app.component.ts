import { Component } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {navigateService} from "./Shared/services/navigate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ng:navigateService) {

  }

  value:number =101;
  email:string;
  incomingValue:any;
  public currdate:Date;
  public color: string = 'blue';
  ngOnChanges(){
    console.log('init is'+this.value);
  }
  ngOnInit(){
    this.currdate = new Date();
    console.log('second is'+this.value);
  }
  setVal(event){
    console.log('val'+event);
  }

  public mainval = new Subject();


  adjust (){
    this.ng.sendvalue.emit('sending');
    this.mainval.next('1');
    console.log('logging1');
    this.mainval.next('2');
    console.log('logging2');
    this.mainval.subscribe(val=>{
      console.log('subscribed val'+val);
    })
}

  asytest = new Observable((observer)=>{
    setTimeout(()=>{
      console.log('val chnged');
      observer.next(14);
    },2000)
  })
}
