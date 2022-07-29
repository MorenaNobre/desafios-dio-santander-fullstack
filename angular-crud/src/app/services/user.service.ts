import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/ec1db859-b6ac-4752-814b-441ad468e9c4'

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D. -> CREATE, READ, UPDATE, DELETE

  //Retorna lista de usuarios READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
