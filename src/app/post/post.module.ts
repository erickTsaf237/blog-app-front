import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostsComponent } from './list-posts/list-posts.component';
import {RouterModule, Routes} from "@angular/router";



const postRoot: Routes = [

]

@NgModule({
  declarations: [
    ListPostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoot)
  ],
  exports:[
      ListPostsComponent,

  ]
})
export class PostModule { }
