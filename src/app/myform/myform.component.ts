import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user:any={};
  getFormDetailes(data:NgForm){
    this.user=data;
  }
}
