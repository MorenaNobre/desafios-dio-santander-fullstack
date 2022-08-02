import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ApiResponse = {
  books: [];
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'https://api.itbook.store/1.0/new';

  // httpOptions = {
  //   Headers: new Headers({ 'Content-Type': 'application/json' }),
  // };

  constructor(private httpClient: HttpClient) {}

  getBook(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
