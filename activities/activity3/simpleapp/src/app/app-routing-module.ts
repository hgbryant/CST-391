import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArtists } from './list-artists/list-artists';
import { ListAlbums } from './list-albums/list-albums';
import { CreateAlbum } from './create-album/create-album';
import { DisplayAlbum } from './display-album/display-album';
import { EditAlbum } from './edit-album/edit-album';
import { DeleteAlbum } from './delete-album/delete-album';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ListArtists },
  { path: 'albums', component: ListAlbums },
  { path: 'albums/create', component: CreateAlbum },
  { path: 'albums/:id', component: DisplayAlbum },
  { path: 'albums/:id/edit', component: EditAlbum },
  { path: 'albums/:id/delete', component: DeleteAlbum }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
