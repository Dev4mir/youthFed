import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  imgs = [
      "../../assets/imgs/ad1.jpg",
      "../../assets/imgs/ad2.jpg",
      "../../assets/imgs/ad3.jpg",
  ];

  i = 1;

  imgSrc: string = "../../assets/imgs/ad1.jpg";

  ngOnInit() {
    this.imgs;

    // change image every 4 sec.
    setInterval(() => {
      this.imgSrc = this.imgs[this.i++];
      if (this.i == this.imgs.length) this.i = 0;
    }, 4000)
  }

}
