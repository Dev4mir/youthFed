import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor() { }
  leftList;
  ngOnInit() {
    this.leftList = [
      {
        "name": "My wall",
        "icon": "file-text-o",
        "router": ['/home', {outlets: {'list': ['my-wall']}}]
      },
      {
        "name": "Profile",
        "icon": "id-card",
        "router": ['/home', {outlets: {'list': ['profile']}}]
      },
      {
        "name": "Messages",
        "icon": "envelope",
        "router": ['/home', {outlets: {'list': ['messages']}}]
      },
      {
        "name": "Colleagues",
        "icon": "graduation-cap",
        "router": ['/home', {outlets: {'list': ['colleagues']}}]
      },
      {
        "name": "Colleagues requests",
        "icon": "graduation-cap",
        "router": ['/home', {outlets: {'list': ['colleagues-requests']}}]
      },
      {
        "name": "My groups",
        "icon": "users",
        "router": ['/home', {outlets: {'list': ['groups']}}]
      },
      {
        "name": "Chat",
        "icon": "comments",
        "router": ['/home', {outlets: {'list': ['chat']}}]
      }
    ]
  }

  selectedIndex: number;
  select(index: number) {
      this.selectedIndex = index;
  }


}
