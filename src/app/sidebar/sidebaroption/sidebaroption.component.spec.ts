import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaroptionComponent } from './sidebaroption.component';

describe('SidebaroptionComponent', () => {
  let component: SidebaroptionComponent;
  let fixture: ComponentFixture<SidebaroptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaroptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
