import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiV1 } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CategoriaService {

  urlApi = 'http://localhost:8080/api/v1';
  
  constructor(private http:HttpClient) { }

  listar(): Observable<any>{
    return this.http.get(`${this.urlApi}/categorias`);
}
}
