import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./create-album/create-album.component').then(m => m.CreateAlbumComponent)
  },
  {
    path: 'list-artists',
    loadComponent: () =>
      import('./list-artists/list-artists.component').then(m => m.ListArtistsComponent)
  },
  {
    path: 'list-albums',
    loadComponent: () =>
      import('./list-albums/list-albums.component').then(m => m.ListAlbumsComponent)
  },
  {
    path: 'display/:id',
    loadComponent: () =>
      import('./display-album/display-album.component').then(m => m.DisplayAlbumComponent)
  },
  {
    path: 'edit/:artist/:id',
    loadComponent: () =>
      import('./edit-album/edit-album.component').then(m => m.EditAlbumComponent)
  },
  {
    path: 'delete/:artist/:id',
    loadComponent: () =>
      import('./delete-album/delete-album.component').then(m => m.DeleteAlbumComponent)
  },
  {
    path: '',
    redirectTo: 'list-artists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
