import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-album',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-album.component.html'
})
export class EditAlbumComponent {
  albumId!: number;
  artist!: string;
  album: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.artist = String(this.route.snapshot.paramMap.get('artist'));
  }

  onSubmit() {
    console.log('Edited album', this.album);
    this.router.navigate(['/display', this.albumId]);
  }
}
