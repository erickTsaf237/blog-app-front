import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from "../Posts";
import {PostService} from "../post.service";
import {Albums} from "../../album/albums";

@Component({
  selector: 'app-list-posts',
  templateUrl: "list-posts.component.html",
  styles: []
})
export class ListPostsComponent implements OnInit, OnChanges {

  public posts: Post[]|undefined = undefined

  albumId: number

  constructor(private postService: PostService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("moi j'ai bien vu comment le truc ci a changé")

    alert("moi j'ai bien vu comment le truc ci a changé")
        throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log('je ne suis pas soul')
    this.postService.getAllPost(this.albumId).subscribe()
  }



}
