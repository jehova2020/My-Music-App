import { Component } from '@angular/core';
import {AllSongsService} from './all-songs.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-song-app';
  data:any = []
  constructor(private songs:AllSongsService)
  {
    this.songs.getSongs().subscribe(data => {
      console.warn(data)
      this.data = data

      
    })
    
    /* this.songs.getAlbums().subscribe(data => {
      console.warn(data)
      this.data = data

      
    }) */

  }
}
