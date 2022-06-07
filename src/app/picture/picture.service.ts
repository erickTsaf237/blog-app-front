import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {catchError, Observable, of, tap} from "rxjs";
import {Picture} from "./picture";
// import {Message} from "./album/album.service";

export class Message{

    constructor(private message: string,
    public data: Picture) {
    }
}

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {

  }

  getPictureById(pictureId: number){
    return this.http.get(`http://localhost:3020/pictures/${pictureId}`).pipe(
        tap(message=>{
          console.log(message)
        }),
        catchError((err)=>{
          return of (err)
        })
    )
  }
}
