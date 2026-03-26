import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MusicServiceService} from '../service/music-service.service';
import { Album } from '../models/Album';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit
{
  album!:Album;
  tracksRaw:string = "";
  wasSubmitted:boolean = false;

  constructor(private route: ActivatedRoute, private service: MusicServiceService, private location: Location) { }

  ngOnInit() {
    let artist = this.route.snapshot.paramMap.get('artist');
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log("The ID is " + id);
    console.log("The Artist is " + artist);
  }

  public onCancel() {
    console.log("I am going back");
    this.location.back();
  }

  public onSubmit() {
  }

}
