import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";


const API_ROUTE = 'http://localhost:3020/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(by: number, hbr: number=15): Observable<any>{
      return this.http.get(`${API_ROUTE}/:by/:nbr`).pipe(
          tap(result => {
              console.table(result);
          }),
          catchError(err => {
              console.error(err);
              return of(err);
          })
      );
  }
}
