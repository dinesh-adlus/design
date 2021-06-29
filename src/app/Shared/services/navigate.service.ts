import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Injectable({
  providedIn:'root'
})

export class navigateService implements OnInit{
  public value1;
  public sendvalue = new EventEmitter<any>();
  constructor(public route:ActivatedRoute) {
  }
  ngOnInit(){
    this.value1 = this.route.snapshot.params['id'];
  }
}
