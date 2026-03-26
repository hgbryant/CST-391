import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAlbumComponent } from '../display-album/display-album.component';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, DisplayAlbumComponent],
  templateUrl: './list-albums.component.html'
})
export class ListAlbumsComponent {
  @Input() artist?: string;

  albums: Album[] = [];
  selectedAlbum?: Album;

  onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }

  ngOnInit() {
  }
}
