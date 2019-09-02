import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiV1 } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import{ CadastroFormComponent} from './cadastro-form/cadastro-form.component';
import { Usuario } from "./usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUrl='http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

  listar(): Observable<any>{
    return this.http.get(`${apiV1}/usuario`);
  }

  criar(usuario: Usuario){  
    return this.http.post(`${this.apiUrl}/usuario`, usuario);
  }
}
