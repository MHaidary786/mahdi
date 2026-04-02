import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    // Using EmailJS or your backend
    return this.http.post('https://api.emailjs.com/api/v1.0/email/send', data);
  }
}