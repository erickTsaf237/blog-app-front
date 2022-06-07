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
  curentAlbumId: number

  constructor(private albumService: AlbumService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ajustPostContence()
  }

  ajustPostContence(){
      let albumId = (this.route.snapshot).paramMap.get('id')
      // alert(albumId)
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

    goToAlbumSpace(alBumId: number) {
        this.router.navigate([`/albums/`, alBumId])
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
