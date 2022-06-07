import { Component, OnInit } from '@angular/core';
import {Albums} from "../albums";
import {AlbumService} from "../album.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-albums',
  templateUrl: "./list-album.component.html",

})
export class ListAlbumsComponent implements OnInit {

  albums:Albums[]
  curentAlbumId: number;
  curentUserId: number|null

  constructor(private albumService: AlbumService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ajustPostContence()
  }

  isPost(albumId: string|null){
      console.log("l'identifieant vaut "+albumId)

      if (albumId) {
          this.curentAlbumId = +albumId
      }
      else {
          this.curentAlbumId = -1
      }
      this.albumService.getAlbumList()
          .subscribe(result => {
              console.log(result)
              this.albums = result.data
          })
      console.log(this.curentAlbumId)
  }

  isUser(userId: string|null){
      if (userId){
          this.curentAlbumId = -2
          // this.albumService.getAlbumList(userId)
          //     .subscribe(result => {
          //         console.log(result)
          //         this.albums = result.data
          //     })
      }

  }
  ajustPostContence(){
      let getId = (this.route.snapshot).paramMap.get('id')
      let page = (this.route.snapshot).paramMap.get('page')
      if(page ==='post'){
            this.isPost(getId)
      }
      else if (page ==='user'){
          this.curentUserId = +(this.route.snapshot).paramMap.get('userid')!
          this.curentAlbumId = -2
        // this.isUser()
      }
      else
          this.router.navigate([''])

  }

    goToAlbumSpace(alBumId: number) {
        this.router.navigate([`/albums/post/`, alBumId])
            .then(()=>{
                this.ajustPostContence()
            })
    }

    getUser(userId: number){

    }

    affiche() {
        alert("prendre quelque chose")
    }

    setPost(){

    }
}
