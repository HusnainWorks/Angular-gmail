import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sideBarOption = [
    {
      icon: 'inbox',
      title: 'Inbox',
      number: '23',
    },
    {
      icon: 'star',
      title: 'Starred',
      number: 'C',
    },
    {
      icon: 'watch_later',
      title: 'Snoozed',
      number: 'C',
    },
    {
      icon: 'label_important',
      title: 'Important',
      number: 'C',
    },
    {
      icon: 'send',
      title: 'Sent',
      number: 'C',
    },
    {
      icon: 'insert_drive_file',
      title: 'Draft',
      number: 'C',
    },
    {
      icon: 'label',
      title: 'Categories',
      number: 'C',
    },
    {
      icon: 'expand_more',
      title: 'More',
      number: 'C',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
