import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class MainComponent implements OnInit {

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
  }
}
