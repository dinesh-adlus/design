import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InternalComponent} from './components/internal/internal.component';
import {authGaurd} from "./auth-gaurd.service";
import {AppComponent} from "./app.component";

const routes: Routes = [{
  path: 'internal', component: InternalComponent},{
  path: 'internal/:id',canActivate: [authGaurd], component:InternalComponent},
  {path: '', component:AppComponent},
  {path: 'patient-info', loadChildren: () => import('./components/patient-info/patient.module').then(m => m.patientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
