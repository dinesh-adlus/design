import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})


export class makeAPICall implements OnInit{

  constructor(public http:HttpClient) {
  }

  ngOnInit() {
  }

  // @ts-ignore
  getStockDetails (): Observable<any>{
    this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe((data)=>{
       console.log('the data is '+ data);
    })
  }
}
