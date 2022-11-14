import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apikey = 'jO3Ru5JNJJAjePI7V9cjaiK645mBG1a4';

  private historial: string[] = [];
  //TODO:cambiar any por sutipo correspondiente
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {}

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

    const url = `http://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=${query}&limit=12`;
    console.log(url);
    this.http.get<SearchGifsResponse>(url).subscribe((response) => {
      console.log(response);
      this.resultados = response.data;
    });
  }
}
