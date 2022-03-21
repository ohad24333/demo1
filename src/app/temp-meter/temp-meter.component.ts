import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }

  tempDesc:string = "";

  ngOnInit(): void {
  }


  inputHandle(str:string){
    let number : number = +str;
    this.tempInsert(number);
  }

  tempInsert(number:number){
   
    if(number < 20){
      this.tempDesc = "Cold";
    }
    else if(number < 30 ){
      this.tempDesc = "Comfortable";
    }
    else {
      this.tempDesc = "Vary hot"
    }
  }
}
