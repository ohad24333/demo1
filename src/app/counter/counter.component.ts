import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter:number = 0;
  needToDisable : boolean = false;

  ngOnInit(): void {
  }

  onPluse(){
    this.counter++;
  }
  onMinus(){
    this.counter--;
  }
}
