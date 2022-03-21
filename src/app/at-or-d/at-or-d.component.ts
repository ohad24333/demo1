import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-or-d',
  templateUrl: './at-or-d.component.html',
  styleUrls: ['./at-or-d.component.css']
})
export class AtOrDComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }

  isCat : boolean = false
  onClick(){
    this.isCat = !this.isCat
  }
}
