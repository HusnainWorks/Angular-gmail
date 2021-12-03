import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebaroption',
  templateUrl: './sidebaroption.component.html',
  styleUrls: ['./sidebaroption.component.scss'],
})
export class SidebaroptionComponent implements OnInit {
  @Input() option: any;
  constructor() {}

  ngOnInit(): void {
    console.warn(this.option);
  }
}
