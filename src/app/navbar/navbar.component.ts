import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  userName: string;
  ngOnInit() {
    this.userName = "User";
  }

  items = [
    {
      name: "home",
      route: "/home",
      icon: "home"
    },
    {
      name: "about us",
      route: "/about",
      icon: "users"
    },
    {
      name: "our services",
      route: "/our-services",
      icon: "graduation-cap"
    },
    {
      name: "new & events",
      route: "/news-and-events",
      icon: "calendar"
    }
  ];


  selectedIndex: number;
  select(index: number) {
      this.selectedIndex = index;
  }

}
