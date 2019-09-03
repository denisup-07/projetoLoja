import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {TokenService} from './token/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAPI = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient,
    private userService: TokenService) { }

  authenticate(email: string, senha: string){
    return this.http.post<any>(this.urlAPI+'/login',{email,senha}).pipe(
      map(
        userData => {
         this.userService.setToken(userData.token);
         return userData;
        }
      )
     );
  }
}
