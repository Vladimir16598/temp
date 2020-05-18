import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
