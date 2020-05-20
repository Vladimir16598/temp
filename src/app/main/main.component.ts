import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {

  }
  isOnFirst :boolean = false;
  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollBy, true)
  }
  scrollBy = (event): void => {
    let el = document.getElementById("main");
    let el1 = document.getElementById("tarifDesktop");

    if (el.getBoundingClientRect().top > -635 && el.getBoundingClientRect().top <= 0) {
      this.isOnFirst = true;
    }
    else {
      this.isOnFirst = false;
    }
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.compareDocumentPosition
    el.scrollIntoView();
  }
}
