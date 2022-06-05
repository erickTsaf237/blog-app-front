import { Component, OnInit } from '@angular/core';
import {Albums} from "../albums";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-list-albums',
  templateUrl: "./list-album.component.html",

})
export class ListAlbumsComponent implements OnInit {

  albums:Albums[]
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbumList()
        .subscribe(result=> {
          console.log(result)
          this.albums = result.data
        })

  }

    goToAlbumSpace(id: string) {
        alert(`Il s'agit de l'album identifier au ${id}`)
    }

    affiche() {
        alert("prendre quelque chose")
    }
}
