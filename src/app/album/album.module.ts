import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";


const albumRoutes: Routes = [
  {path:'albums', component:ListAlbumsComponent},
  {path: '', redirectTo:'albums', pathMatch:'full'},

    {path: '**', component: PageNotFoundComponent}

]

@NgModule({
    declarations: [
        ListAlbumsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(albumRoutes)
    ],
    exports: [
        ListAlbumsComponent
    ],
    providers: []
})
export class AlbumModule { }
