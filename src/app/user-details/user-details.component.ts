import { Component, OnInit } from '@angular/core';
import type { User } from '../interface/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() {
    this.color = "blue";
    this.insertClasses();
  }

  isSpecial: boolean = true;
  color: string = "";

  myClasses:any = {};

  styles = {
    "font-size" : "20px",
    "border" : "2px solid blue"
  }


  user: User = {
    name: "ohad",
    email: "ohad@mail.com",
    birthDate: Date.parse('1994-09-10'),
    contact: "Eail",
  }
  ngOnInit(): void {
  }

  getAge(dob: number) {
    if (dob != undefined) {
      return (Date.now() - dob) / 1000 / 60 / 60 / 24 / 365;
    } else return
  }

  insertClasses(){
    this.myClasses = {
      "style1" : true,
      "style2" : true,
    }
  }
}
