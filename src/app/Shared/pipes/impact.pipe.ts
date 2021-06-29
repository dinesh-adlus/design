import {Pipe,PipeTransform} from "@angular/core";


@Pipe({
  name:'flatter'
})

export class TestConnectionPipe implements PipeTransform{
  transform(value: any, ...args): any {
    if(value){
      console.log('i have got it'+ args);
      return value+1;
    }
    else{
      console.log('noö');
      return value;
    }
  }

}
