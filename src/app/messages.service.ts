import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from './messages';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000';

  getMessages(): Observable<Message[]>{
  return this.http.get<Message[]>(`${this.BASE_URL}/api/messages/`);
  }

}
