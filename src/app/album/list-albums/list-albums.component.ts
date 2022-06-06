import { Component, OnInit } from '@angular/core';
import {Albums} from "../albums";
import {AlbumService} from "../album.service";
import {PostService} from "../../post/post.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-list-albums',
  templateUrl: "./list-album.component.html",

})
export class ListAlbumsComponent implements OnInit {

  albums:Albums[]
  curentAlbum: Albums
  constructor(private albumService: AlbumService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const AlbumId = (this.route.snapshot).paramMap.get('id')
    this.albumService.getAlbumList()
        .subscribe(result=> {
          console.log(result)
          this.albums = result.data
        })

  }

    goToAlbumSpace(alBumId: number) {
        alert("je ne vous dis pas \n je ne vous dis pas")
        this.router.navigate([`/post/post/`, alBumId])
        // this.curentAlbum = album
        // const post_list = document.getElementById("post-list")
        // if(post_list !== null)
        //     post_list.innerHTML

    }

    affiche() {
        alert("prendre quelque chose")
    }

    setPost(){

    }
}
