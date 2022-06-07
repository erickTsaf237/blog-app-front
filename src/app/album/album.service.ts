import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Albums} from "./albums";
import {PostService} from "../post/post.service";
import {Picture} from "../picture/picture";




export class Message{
    constructor(private message:string, private data: Albums|Albums[]|Picture|undefined) {
    }
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, private postService: PostService) { }

  log(result:any){
    console.table(result)
    return result.data
  }
  handleError(error: any, answer: any){
    // console.error(error)
    return answer
   }
  //     http://localhost:4200/albums

  getAlbumList():Observable<any>{
      const httpOption = {
          headers : new HttpHeaders({'content-type': 'application/Json'}),
          server: 'localhost:3020'
      }
    return this.http.get<Message>(`http://localhost:3020/albums`)
        .pipe(
        tap((result)=>this.log(result)),
        catchError(err => {
            console.table(err.message)
          return this.handleError(err, [])
        })
    )
  }



}
