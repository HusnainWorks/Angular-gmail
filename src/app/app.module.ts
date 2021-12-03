import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebaroptionComponent } from './sidebar/sidebaroption/sidebaroption.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MailComponent } from './email-list/mail/mail.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailRowComponent } from './email-list/email-row/email-row.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebaroptionComponent,
    MailComponent,
    EmailListComponent,
    EmailRowComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
