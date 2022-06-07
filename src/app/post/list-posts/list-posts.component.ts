import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from "../Posts";
import {PostService} from "../post.service";
import {Albums} from "../../album/albums";
import {Possesses} from "../Possess";

@Component({
  selector: 'app-list-posts',
  templateUrl: "list-posts.component.html",
  styles: []
})
export class ListPostsComponent implements OnInit, OnChanges {

  public posts: Post[]|undefined = undefined;
  numbers: number[] = [5, 8, 9, 7, 122, 6, 9]
  @Input()albumId: number

  constructor(private postService: PostService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.afficheToutLesPost()
  }

  ngOnInit(): void {
    this.afficheToutLesPost()
  }

  afficheToutLesPost(){
      if (this.albumId !== -1) {
          this.postService.getAllPost(this.albumId).subscribe(
              posts => {
                  this.posts = posts.data.map((possesses: Possesses) => possesses.poste)
                  console.log('la taille est :' + this.posts?.length)
              }
          )
      }
      else
          this.posts = undefined
  }


  goToAlbumSpace(id: number) {

  }

    clickLike(postId: number, userId: number) {

    }

    addComment(post: Post) {
        post.comment = !post.comment
        if (!post.comment){
            alert("on envoie le message")
        }
    }
}
