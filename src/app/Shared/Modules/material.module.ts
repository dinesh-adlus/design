import {NgModule} from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[MatTableModule,CommonModule],
  exports :[MatTableModule]
})

export class MaterialModule{}
