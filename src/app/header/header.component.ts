import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  message: string | any;
  constructor(private data: DatashareService) {}

  ngOnInit(): void {}
  msgToEmail() {
    this.data.changeMessage(this.message);
  }
}
