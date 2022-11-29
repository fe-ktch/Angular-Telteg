/*
* File: app.module.ts
* Author: Sangare F. Felisha
* Copyright: 2022, Sangare F. Felisha
* Group: SZOFT II N
* Date: 2022-11-29
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
