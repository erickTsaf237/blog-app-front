import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFriendComponent } from './list-friend/list-friend.component';
import {PictureModule} from "../picture/picture.module";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const friendRoute: Routes =[
    {path: 'friends', component: ListFriendComponent},
    {path: 'friends/:id', component: ListFriendComponent},

    {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [
    ListFriendComponent
  ],
    imports: [
        CommonModule,
        PictureModule,
        RouterModule.forRoot(friendRoute)
    ]
})
export class FriendModule { }
