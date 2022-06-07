import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostsComponent } from './list-posts/list-posts.component';
import {RouterModule, Routes} from "@angular/router";
import {PictureComponent} from "../picture/picture.component";
import {PictureModule} from "../picture/picture.module";



const postRoot: Routes = [

]

@NgModule({
  declarations: [
    ListPostsComponent,
  ],
  imports: [
    CommonModule,
    PictureModule,
    RouterModule.forChild(postRoot),
  ],
  exports:[
      ListPostsComponent,
  ],
  providers:[]
})
export class PostModule { }
