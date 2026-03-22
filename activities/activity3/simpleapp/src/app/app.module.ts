import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';

import { ListArtists } from './list-artists/list-artists';
import { ListAlbums } from './list-albums/list-albums';
import { CreateAlbum } from './create-album/create-album';
import { DisplayAlbum } from './display-album/display-album';
import { EditAlbum } from './edit-album/edit-album';
import { DeleteAlbum } from './delete-album/delete-album';

@NgModule({
  declarations: [
    AppComponent,
    ListArtists,
    ListAlbums,
    CreateAlbum,
    DisplayAlbum,
    EditAlbum,
    DeleteAlbum
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
