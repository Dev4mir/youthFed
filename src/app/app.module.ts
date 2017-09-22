import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule }  from '@angular/forms';

import { Autosize } from 'angular2-autosize/src/autosize.directive';
import { MomentModule } from 'angular2-moment';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import {  ROUTES  } from './routes'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { UserWallComponent } from './user-wall/user-wall.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserColleaguesComponent } from './user-colleagues/user-colleagues.component';
import { UserColleaguesRequestsComponent } from './user-colleagues-requests/user-colleagues-requests.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    OurservicesComponent,
    NewsEventsComponent,
    LeftSideComponent,
    UserWallComponent,
    UserProfileComponent,
    UserMessagesComponent,
    UserColleaguesComponent,
    UserColleaguesRequestsComponent,
    UserGroupsComponent,
    UserChatComponent,
    Autosize,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MomentModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
