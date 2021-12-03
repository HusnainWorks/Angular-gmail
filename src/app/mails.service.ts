import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from 'src/mails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailsService {
  private apiUrl = 'http://localhost:3000/mail';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private https: HttpClient) {}

  getMails(): Observable<Mail[]> {
    return this.https.get<Mail[]>(this.apiUrl);
  }

  getMail(id: any): Observable<Mail> {
    const url = `${this.apiUrl}/${id}`;
    return this.https.get<Mail>(url);
  }

  deleteMail(id: any): Observable<Mail> {
    const url = `${this.apiUrl}/${id}`;
    return this.https.delete<Mail>(url);
  }
}
