import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsComponent } from '../list-albums/list-albums.component';
import exampledata from '../../data/sample-music-data.json';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, ListAlbumsComponent],
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  artists: string[] = [];       
  selectedArtist: string = '';

  ngOnInit(): void {

    const allArtists = (exampledata as any[]).map(album => album.artist);
    this.artists = Array.from(new Set(allArtists));
  }

  onSelectArtist(artist: string): void {
    this.selectedArtist = artist;
  }
}
