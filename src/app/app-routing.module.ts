import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailListComponent } from './email-list/email-list.component';
import { MailComponent } from './email-list/mail/mail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mail' },
  {
    path: 'mail',
    component: EmailListComponent,
  },
  {
    path: 'mail/:id',
    component: MailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
