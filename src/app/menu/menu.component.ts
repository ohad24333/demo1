import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.obj = [
      {title : "Google",link : "https://google.com"},
      {title : "Yahoo",link : "https://yahoo.com"},
      {title : "Ynet",link : "https://ynet.co.il"},
      {title : "Walla",link : "https://walla.co.il"},
      
    ];

   }

  obj:any[] =[];
  ngOnInit(): void {
  }

}

