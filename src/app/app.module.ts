import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlbumModule} from "./album/album.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HttpClientModule} from "@angular/common/http";
import {PictureComponent} from "./picture/picture.component";
import {FriendModule} from "./friend/friend.module";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AlbumModule,
        FriendModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
