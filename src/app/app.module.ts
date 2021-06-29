import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InternalComponent } from './components/internal/internal.component';
import {colorChangeDirective} from './Shared/Directives/color.directive';
import {colorChange} from './Shared/Directives/colorcopy.directive';
import {TestConnectionPipe} from './Shared/pipes/impact.pipe';
import {navigateService} from "./Shared/services/navigate.service";
import {authGaurd} from "./auth-gaurd.service";
import {stateService} from "./Shared/services/state.service";
import {makeAPICall} from './Shared/services/mainapi.service'
import {MaterialModule} from './Shared/Modules/material.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InternalComponent,
    colorChangeDirective,
    TestConnectionPipe,
    colorChange
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [navigateService,stateService,authGaurd,makeAPICall],
  bootstrap: [AppComponent]
})
export class AppModule { }
