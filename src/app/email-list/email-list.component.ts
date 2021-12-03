import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MailsService } from '../mails.service';
import { Mail } from 'src/mails';
import { DatashareService } from '../datashare.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
})
export class EmailListComponent implements OnInit {
  message: string | any;
  EmailList: Mail[] = [];
  lowValue: number = 0;
  highValue: number = 10;

  constructor(
    private mailsService: MailsService,
    private data: DatashareService
  ) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.mailsService.getMails().subscribe((Email) => (this.EmailList = Email));
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
