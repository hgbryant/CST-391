import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  albums: Album[] = (exampledata as any[]).map(album => ({
    albumId: Number(album.id),
    title: String(album.title),
    artist: String(album.artist),
    description: album.description ?? "",
    year: Number(album.year),
    image: String(album.image),
    tracks: album.tracks ?? []
  }));

  private host = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<string[]>(`${this.host}/artists`)
      .subscribe(names => callback(names.map(name => ({ artist: name }))));
  }

  getAlbums(callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(`${this.host}/albums`).subscribe(callback);
  }

  getAlbumsOfArtist(callback: (albums: Album[]) => void, artistName: string): void {
    this.http.get<Album[]>(`${this.host}/albums/${artistName}`).subscribe(callback);
  }

  createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album[]>(`${this.host}/albums/`, album).subscribe(() => callback());
  }

  updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album[]>(`${this.host}/albums/`, album).subscribe(() => callback());
  }

  deleteAlbum(id: number, callback: () => void): void {
    this.http.delete(`${this.host}/albums/${id}`).subscribe(() => callback());
  }

  getAlbumById(id: number, callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(`${this.host}/albums?albumId=${id}`).subscribe(callback);
  }

}
