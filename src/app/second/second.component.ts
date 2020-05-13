import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class SecondComponent implements OnInit {
  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;

  constructor() {

  }

  ngOnInit(): void {
    this.isMobile = this.width < this.mobileWidth;
  }
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    console.log("Mobiel ", this.isMobile);
  }
}
