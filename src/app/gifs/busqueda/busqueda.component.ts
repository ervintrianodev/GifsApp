import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBusqueda') txtBusqueda!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    const valor = this.txtBusqueda.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBusqueda.nativeElement.value = '';
  }
}
