import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  constructor() {

  }
  isOnSecond :boolean = false;
  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollBy, true)
  }

  scrollBy = (event): void => {
    let el = document.getElementById("appDesktop");
    let el1 = document.getElementById("tarifDesktop");
    if (el.getBoundingClientRect().top < 635  && el.getBoundingClientRect().top > -635) {
      this.isOnSecond = true;
    }
    else {
      this.isOnSecond = false;
    }
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
