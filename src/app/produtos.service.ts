import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiV1 } from '../environments/environment';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})


export class ProdutosService {

  urlAPI= 'http://localhost:8080/api/v1';

  constructor(private http:HttpClient) { }

  listar(): Observable<any>{
    return this.http.get(`${this.urlAPI}/produtos`);
  }

  listarNome(nome: string): Observable<any>{
    return this.http.get(`${this.urlAPI}/produtos?nome=${nome}`);
  }

  listarCategoria(categoria: string): Observable<any>{
    return this.http.get(`${this.urlAPI}/produtos?categoria=${categoria}`);
  }

  criar(produto: Produto){  
    return this.http.post(`${this.urlAPI}/produtos`, produto);
  }
}
