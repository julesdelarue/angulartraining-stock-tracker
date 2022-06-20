import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonthPipe} from "./pipes/month.pipe";
import {EnforcePositifPipe} from "./pipes/enforce-positif.pipe";



@NgModule({
  declarations: [
    MonthPipe,
    EnforcePositifPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MonthPipe,
    EnforcePositifPipe
  ]
})
export class SharedModule { }
