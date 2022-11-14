import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) {}
  public buscar(query: string = ''): void {
    this.gifsService.buscarGifs(query);
  }

  get getHistorial() {
    return this.gifsService.getHistorial;
  }
  ngOnInit(): void {}
}
