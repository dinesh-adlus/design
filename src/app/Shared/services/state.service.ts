import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {FormControl} from "@angular/forms";


@Injectable({
  providedIn:'root'
})

export class stateService {
   baseFormValues = {
    'firstName':'',
    'lastName':'',
    'gender':'',
    'hobbies':''
  }

  public _state = new BehaviorSubject<any>(this.baseFormValues);
   public exposeState = this._state.asObservable();

  setState(val:any){
     this._state.next(val);
   }

   getState(val:any):any{
    const arr = [];
     this.exposeState.subscribe(value => {
       console.log(value[val]);
       arr.push(value);
     })
     return arr[0][val];
   }

}
