/*
* File: app.component.ts
* Author: Sangare F. Felisha
* Copyright: 2022, Sangare F. Felisha
* Group: SZOFT II N
* Date: 2022-11-29
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Telteg';
  aOldal !: number;
  bOldal !: number;
  area !: number;

  calcArea():void {
    let aOldal = this.aOldal;
    let bOldal = this.bOldal;
    this.area = 2 * (aOldal * bOldal);
  }
}
