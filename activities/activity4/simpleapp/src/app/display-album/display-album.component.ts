import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-album.component.html'
})
export class DisplayAlbumComponent {
  @Input() album!: {
    albumId: number;
    title: string;
    artist: string;
    description: string;
    year: number;
    image: string;
    tracks: any[];
  };
}
