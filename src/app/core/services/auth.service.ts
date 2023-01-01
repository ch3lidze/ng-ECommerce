import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { BaseService } from './base.service';
import {Login, LoginResponse, Register} from "../interfaces/auth"
import {  Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService extends BaseService {

  login(payload: any): Observable<LoginResponse>{
    return this.post<LoginResponse>('auth/login', payload)
  }

  register(payload: any): Observable<User>{
    return this.post<User>('auth/login', payload)
  }



 
}
