import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p class="redAlert">Copyright {{Name}} Year: {{getDate()}}</p> `,
  styles: [`
  .redAlert{ 
    color: "red";
  }`
  ],
})
export class CopyrightComponent implements OnInit {

  constructor() { }
  Name :string = 'ohad';
  getDate(){
    return new Date().getFullYear();
  }
  ngOnInit(): void {
  }

}
