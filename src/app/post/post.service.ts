import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Message} from "../album/album.service";
import {catchError, tap} from "rxjs";


const API_ROOT: string = 'http://localhost:3020'

@Injectable({
  providedIn: 'root'
})
export class PostService {



  constructor(private http: HttpClient) { }

  getAllPost(albumId:number){
    // this.http.get<Message>(``)
    return this.http.get<any>(`${API_ROOT}/possess/album/${albumId}`).pipe(
        tap(response=>{
          return response.data.poste
        })
        ,catchError((error)=>{
          console.error(error)
          return []
        })
    )

  }

}
