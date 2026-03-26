import { Track } from './tracks.model';

export interface Album {
    albumId: number,
    title: string,
    artist: string,
    description: string,
    year: number,
    image: string,
    tracks: Track[]
}
