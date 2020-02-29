import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  public appMenuList = [
    {
      name: 'Academics',
      menus: [
        {
          title: 'My Courses',
          url: '/folder/Inbox',
          icon: 'book'
        },
        {
          title: 'Examinations',
          url: '/folder/Inbox',
          icon: 'document-text'
        },
        {
          title: 'Schedule',
          url: '/folder/Inbox',
          icon: 'time'
        },
        {
          title: 'Assignments',
          url: '/folder/Inbox',
          icon: 'hourglass'
        },
        {
          title: 'Attendance',
          url: '/folder/Inbox',
          icon: 'battery-full'
        },
        {
          title: 'Notifications',
          url: '/folder/Inbox',
          icon: 'notifications'
        }
      ]
    },
    {
      name: 'My Account',
      menus: [
        {
          title: 'My Profile',
          url: '/folder/Inbox',
          icon: 'person-circle'
        },
        {
          title: 'Billing',
          url: '/folder/Inbox',
          icon: 'card'
        },
        {
          title: 'Change Password',
          url: '/folder/Inbox',
          icon: 'key'
        },
        {
          title: 'Logout',
          url: '/folder/Inbox',
          icon: 'log-out'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
