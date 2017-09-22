import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-user-wall',
  templateUrl: './user-wall.component.html',
  styleUrls: ['./user-wall.component.css']
})

export class UserWallComponent implements OnInit {


  userImgSrc: string = "../../assets/imgs/userPhoto.png"
  userName: string = "User Name";
  userUniversity: string = "University of toronto";
  timeDate: Date = new Date();
  otherDate: Date = new Date();
  similarDates: boolean = false;
  url: string;

  constructor(private renderer:Renderer) {
    this.call(400);
  }

  //posts array for static data and new data i will push
  posts = [
      {
        userName: this.userName,
        userUniversity: this.userUniversity,
        userProfileImg: this.userImgSrc,
        userInput: "Achieving your goals by thinking out of the box",
        postImg: "",
        date: new Date("November 17, 2016"),
        otherDate: new Date(),
        similarDates: this.similarDates
    },
    {
      userName: this.userName,
      userUniversity: this.userUniversity,
      userProfileImg: this.userImgSrc,
      userInput: "How to register to toronto university",
      postImg: "../../assets/imgs/post3.jpg",
      date: new Date("November 17, 2016"),
      otherDate: new Date(),
      similarDates: this.similarDates
    },
    {
      userName: this.userName,
      userUniversity: this.userUniversity,
      userProfileImg: this.userImgSrc,
      userInput: "Only 3 simple steps to apply for alberta university",
      postImg: "../../assets/imgs/post2.jpg",
      date: new Date("November 17, 2016"),
      otherDate: new Date(),
      similarDates: this.similarDates
  },
  {
    userName: this.userName,
    userUniversity: this.userUniversity,
    userProfileImg: this.userImgSrc,
    userInput: "Do you think it's important to study abroad nowdays?",
    postImg: "../../assets/imgs/post1.jpg",
    date: new Date(this.otherDate.setMinutes(this.otherDate.getMinutes() - 17)),
    otherDate: new Date(this.otherDate.setDate(this.otherDate.getDate() + 1)),
    similarDates: this.similarDates
  }
  ];


  //New Post function
  newPost(input:string){
    if((input == null || input.trim() == "" ) && this.url == null){
      return 0;
    }else{

      this.timeDate = new Date();
      this.otherDate = new Date();

      this.otherDate = new Date(this.otherDate.setDate(this.otherDate.getDate() + 1));

      this.posts.push({
        userName: this.userName,
        userUniversity: this.userUniversity,
        userProfileImg: this.userImgSrc,
        userInput: input,
        postImg: this.url,
        date: this.timeDate,
        otherDate: this.otherDate,
        similarDates: this.similarDates
      });
      this.call();
      this.otherDate = new Date();
    }
  }

  private call(t?){
    this.posts.forEach(elm => {
      if (t == 400){
        this.getDate(elm, t);
      }else{
        this.getDate(elm, t);
      }
    })
  }
  // Update Date every sec.
  private getDate(elm, t){
    setInterval(()=> {
      var d = new Date();
      if(d >= elm.otherDate){
        elm.similarDates = true;
      }else{
        elm.similarDates = false;
      }
    }, t);
  }

  @ViewChild('fileInput') fileInput:ElementRef;

  // Click event to insert image for icon
  showImage() {
    let event = new MouseEvent('click', {bubbles: true});
    this.fileInput.nativeElement.click()
  }
  // Click to get reader for uploaded image
  readUrl(event) {
    this.url = null;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit() {

  }


}
