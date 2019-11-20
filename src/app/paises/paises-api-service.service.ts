import { PaisI } from './pais.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
/* @Injectable({
  providedIn: 'root'
}) */
export class PaisesApiServiceService {

  constructor( private http: HttpClient) { }
  urlApi = 'http://127.0.0.1:8000/api/categorias';
  getPaises(): Observable<PaisI[]>{
      return this.http.get<PaisI[]>(this.urlApi);
  }
}
