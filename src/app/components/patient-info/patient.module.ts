import {NgModule} from "@angular/core";
import {PatientInfoComponent} from "./patient-info.component";
import {PatientRecordsComponent} from "./patient-records/patient-records.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../Shared/Modules/material.module";


const mainroutes:Routes = [
  {path:'',children:[
      {path:'', component:PatientInfoComponent},
      {path:'records', component:PatientRecordsComponent},
    ]}
]
@NgModule({
  declarations:[PatientInfoComponent,PatientRecordsComponent],
  imports:[CommonModule,MaterialModule,RouterModule.forChild(mainroutes)],
  exports:[RouterModule]
})

export class patientModule{}
