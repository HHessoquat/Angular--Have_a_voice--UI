import { Injectable } from '@angular/core';
import Credentials from '../models/Credentials';
import {ApiService} from './api.service';
import {map, take, tap} from 'rxjs';
import ApiResponse from '../models/ApiResponse';
import {LoginResponse} from '../models/ApiResponses/loginResponse';
import {jwtDecode} from 'jwt-decode';
import {JwtPayload} from '../models/JwtPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private apiService: ApiService) { }

  login(credentials: Credentials) {
    return this.apiService.login(credentials).pipe(
      take(1),
      tap((response: ApiResponse<LoginResponse | null>) => {
        if (response.code === "200" && response.body) {
          this.setSession(response.body)
        }
      }),
      map((response: ApiResponse<LoginResponse | null>) => {
        return response.code
      })
    ).subscribe();
  }

  setSession(response: LoginResponse) {
    localStorage.setItem("auth_token", response.token);
    localStorage.setItem("expires_in", JSON.stringify(response.expires.valueOf()));
  }

  logout(): void {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("expires_in");
  }

  isLoggedIn(): boolean {
    let expires_in = localStorage.getItem("expires_in");
    if (!expires_in) {
      return false
    }
    return Date.now() < JSON.parse(expires_in);
  }

  getConnectedUserId() {
    const token = localStorage.getItem("auth_token");
    if (!this.isLoggedIn() || !token) {
      return null;
    }
    return jwtDecode<JwtPayload>(token).userId;
  }

}
