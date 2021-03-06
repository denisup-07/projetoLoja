import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';
import { User } from "./user";
import * as jtw_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {
    private userSubject = new Subject<User>();

    constructor(private tokenService: TokenService) { }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {}

    private decodeAndNotify(){
        const token = this.tokenService.getToken;
        const user = jtw_decode(token) as User;
        this.userSubject.next(user);
    }
}