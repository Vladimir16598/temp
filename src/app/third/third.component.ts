import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() {

  }
  isOnThird :boolean = false;
  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollBy, true)
  }

  scrollBy = (event): void => {
    let el = document.getElementById("tarifDesktop");
    console.log(el.getBoundingClientRect().top);
    console.log(el.getBoundingClientRect().bottom);
    if (el.getBoundingClientRect().top < 635  && el.getBoundingClientRect().top > -635) {
      this.isOnThird = true;
    }
    else {
      this.isOnThird = false;
    }
  }
  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
