import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from 'src/mails';
import { MailsService } from 'src/app/mails.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  public id: any;
  EmailList: Mail | any;

  constructor(
    private route: ActivatedRoute,
    private mailsService: MailsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.mailsService
      .getMail(this.id)
      .subscribe((EmailList) => (this.EmailList = EmailList));
  }
}
