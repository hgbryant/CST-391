import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './delete-album.component.html'
})
export class DeleteAlbumComponent {
  albumId!: number;
  artist!: string;
  wasDeleted = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.artist = String(this.route.snapshot.paramMap.get('artist'));
  }

  onDelete() {
    // Your deletion logic here
    console.log('Deleted album', this.albumId);
    this.wasDeleted = true;
    this.router.navigate(['/list-albums']);
  }
}
