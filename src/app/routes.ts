import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { UserWallComponent } from './user-wall/user-wall.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserColleaguesComponent } from './user-colleagues/user-colleagues.component';
import { UserColleaguesRequestsComponent } from './user-colleagues-requests/user-colleagues-requests.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { UserChatComponent } from './user-chat/user-chat.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UserWallComponent,
        outlet: 'list'
      },
      {
        path: 'my-wall',
        component: UserWallComponent,
        outlet: 'list'
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        outlet: 'list'
      },
      {
        path: 'messages',
        component: UserMessagesComponent,
        outlet: 'list'
      },
      {
        path: 'colleagues',
        component: UserColleaguesComponent,
        outlet: 'list'
      },
      {
        path: 'colleagues-requests',
        component: UserColleaguesRequestsComponent,
        outlet: 'list'
      },
      {
        path: 'groups',
        component: UserGroupsComponent,
        outlet: 'list'
      },
      {
        path: 'chat',
        component: UserChatComponent,
        outlet: 'list'
      }
    ]
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'our-services',
    component: OurservicesComponent
  },
  {
    path: 'news-and-events',
    component: NewsEventsComponent
  }
];
