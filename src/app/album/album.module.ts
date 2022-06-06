import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ListPostsComponent} from "../post/list-posts/list-posts.component";
import {PostModule} from "../post/post.module";


const albumRoutes: Routes = [
  {path: 'albums/post/:id', component: ListPostsComponent},
  {path:'albums', component:ListAlbumsComponent},
  {path: '', redirectTo:'albums', pathMatch:'full'},

    {path: '**', component: PageNotFoundComponent}

]

@NgModule({
    declarations: [
        ListAlbumsComponent,
    ],
    imports: [
        CommonModule,
        PostModule,
        RouterModule.forChild(albumRoutes)
    ],
    exports: [
        ListAlbumsComponent
    ],
    providers: []
})
export class AlbumModule { }
