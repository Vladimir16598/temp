import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showLogo: boolean = true;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollBy, true)
  }

  scrollBy = (event): void => {
    // console.log(event);
    let el = document.getElementById("main");
    let el1 = document.getElementById("navi");
    console.log("TOP",el.getBoundingClientRect().top);
    // console.log(el1.getBoundingClientRect().top);
    // console.log("BOTTOM",el.getBoundingClientRect().bottom);
    if (el.getBoundingClientRect().top < 0.875) {
      this.showLogo = false;
    }
    else {
      this.showLogo = true;
    }
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
