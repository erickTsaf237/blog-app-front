import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ListPostsComponent} from "../post/list-posts/list-posts.component";
import {PostModule} from "../post/post.module";
import {Picture} from "../picture/picture";
import {PictureComponent} from "../picture/picture.component";


const albumRoutes: Routes = [
  {path: 'albums/:page/:id', component: ListAlbumsComponent},
  {path: 'albums/:page', component: ListAlbumsComponent},
  {path: 'albums', redirectTo: 'albums/:page', pathMatch:'full'},
    // {path:'albums', component:ListAlbumsComponent},
  {path: '', redirectTo:'albums', pathMatch:'full'},
  // {path: '**', component: PageNotFoundComponent}

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
