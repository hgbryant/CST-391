import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-album.component.html'
})
export class CreateAlbumComponent {
  album = { title: '', artist: '', description: '', year: 0, image: '' };
  tracksRaw = '';
  wasSubmitted = false;

  onSubmit() {
    this.wasSubmitted = true;
    console.log(this.album, this.tracksRaw);
  }
}
