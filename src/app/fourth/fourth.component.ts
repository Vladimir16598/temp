import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  constructor() {

  }
  isOnFourth :boolean = false;
  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollBy, true)
  }

  scrollBy = (event): void => {
    let el = document.getElementById("about");
    if (el.getBoundingClientRect().top < 635  && el.getBoundingClientRect().top > -635) {
      this.isOnFourth = true;
    }
    else {
      this.isOnFourth = false;
    }
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
