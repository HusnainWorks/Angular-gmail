import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRowComponent } from './email-row.component';

describe('EmailRowComponent', () => {
  let component: EmailRowComponent;
  let fixture: ComponentFixture<EmailRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
