import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apikey = 'jO3Ru5JNJJAjePI7V9cjaiK645mBG1a4';
  private historial: string[] = [];
  constructor() {}
  get getHistorial() {
    return [...this.historial];
  }
  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (query.trim().length === 0) return;
    if (this.historial.length >= 10) {
      this.historial = this.historial.splice(0, 10);
    }
    if (!this.historial.includes(query)) {
      this.historial.unshift(query);
      console.log(this.historial);
    }
  }
}
