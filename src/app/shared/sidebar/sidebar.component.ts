import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) {
   }

  get getHistorial(){
    return this.gifsService.getHistorial;
  }
  ngOnInit(): void {
  }

}
