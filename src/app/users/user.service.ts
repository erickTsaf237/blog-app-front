import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";


const API_ROUTE = 'http://localhost:3020/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(limit: number=10, offset: number=0): Observable<any>{
      return this.http.get(`${API_ROUTE}/${limit}/${offset}`).pipe(

          tap(result => {
              console.table(result);
          }),
          catchError(err => {
              console.error(err);
              return of(err);
          })

      );
  }
  getoneUserById(userId: number){
      return this.http.get(`${API_ROUTE}/`).pipe(

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
