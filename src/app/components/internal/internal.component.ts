import {Component, Input, OnInit, Output,EventEmitter,OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from "@angular/forms";
import {stateService} from "../../Shared/services/state.service";
import {navigateService} from "../../Shared/services/navigate.service";
import {ActivatedRoute, Router} from "@angular/router";
import {makeAPICall} from '../../Shared/services/mainapi.service';
@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent implements OnInit {
   public taril:any;
  @Input() emailData:string;
  @Input('Phone') PhoneNumber:number;
  @Output('tableId') tableid = new EventEmitter<any>();
  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder,
    public stateService:stateService,
    private ng:navigateService,
    public route:ActivatedRoute,
    private router:Router,
    private makeAPICall:makeAPICall
  ) { }

  ngOnInit(): void {
    this.ng.sendvalue.subscribe(val=>{
      console.log('i recieved it'+ val);
    })
    const ppp = this.stateService.getState('firstName');
    console.log('The retrived value from form is'+ ppp);
    this.myForm = this.fb.group({
      // 'firstName': new FormControl('TestDude'),
      'firstName': new FormControl(this.stateService.getState('firstName')),
      'lastName': new FormControl(this.stateService.getState('lastName')),
      'gender': new FormControl(this.stateService.getState('gender')),
      'hobbies':new FormArray([])
    });
    this.onChanges();
  }
  public  recievedValue = this.route.snapshot.params['id'];
 onChanges(){
     // this.myForm.get('firstName').valueChanges.subscribe(val => {
     //     console.log('value changed is'+ val);
     // });
     this.myForm.valueChanges.subscribe(t=>{
       console.log('changes is'+ t);
     })
   }

   addingnewval ():FormGroup{
    return this.fb.group({
      'tester': new FormControl('')
    })
   }
   addhobbies(){
    const control = new FormControl('',Validators.required);
     //  // @ts-ignore
     // const iou = this.myForm.get('hobbies')['controls'] as FormArray;
     // iou.push(this.addingnewval());
     // console.log('iou is'+iou);
     return  (this.myForm.get('hobbies') as FormArray).push(new FormControl(''));
   }

  public popup = () => {
    this.tableid.emit('233');
   }

  submitting(){
    console.log(this.myForm);
    this.stateService.setState({
      'firstName':this.myForm.get('firstName').value,
      'lastName':this.myForm.get('lastName').value,
      'gender':this.myForm.get('gender').value,
      'hobbies':this.myForm.get('hobbies').value
    })
    this.router.navigate(['/patient-info'])
  }
  makeservice(){
   this.makeAPICall.getStockDetails();
  }

}
