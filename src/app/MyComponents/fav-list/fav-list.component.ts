import { Component, OnInit } from '@angular/core';
import {List} from "../../List"

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

lists:any = []
  constructor() {

    this.lists = [

      {
        userId:1,
        albumId: 1,
        title: "this is 1 from favlist"
      },
      {
        userId:2,
        albumId: 2,
        title: "this is 2 from favlist"
      }
      
    ]
   }

  ngOnInit(): void {
  }

}
