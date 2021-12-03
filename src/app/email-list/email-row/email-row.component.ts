import { Component, OnInit, Input } from '@angular/core';
import { MailsService } from 'src/app/mails.service';

@Component({
  selector: 'app-email-row',
  templateUrl: './email-row.component.html',
  styleUrls: ['./email-row.component.scss'],
})
export class EmailRowComponent implements OnInit {
  @Input() email: any;
  constructor(private mailsService: MailsService) {}

  ngOnInit(): void {}

  deleteMail(id: any) {
    this.mailsService
      .deleteMail(id)
      .subscribe((Email) => console.log(this.email));
  }
}
