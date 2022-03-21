import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printAlert (alr : string){
    alert(alr);
  }
}
