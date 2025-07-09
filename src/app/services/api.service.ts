import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, Observable, of, shareReplay} from 'rxjs';
import Election from '../models/Election';
import ApiResponse from '../models/ApiResponse';
import Credentials from '../models/Credentials';
import {LoginResponse} from '../models/ApiResponses/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.apiUrl + environment.baseUrl;
  constructor(private http: HttpClient) {}


  login(credentials: Credentials): Observable<ApiResponse<LoginResponse | null>> {
    return this.http.post<ApiResponse<LoginResponse>>(environment.apiUrl + 'login', credentials)
      .pipe(
        catchError((err:HttpErrorResponse):Observable<ApiResponse<LoginResponse | null>> => {
          if (this.isApiResponse(err.error)) {
            return of(err.error);
          }
          return of({
            code: err.status.toString(),
            message:err.statusText,
            body:null
          });
        })
      );
  }

  isApiResponse(obj: any): obj is ApiResponse<any> {
    return typeof obj === 'object'
      && obj !== null
      && typeof obj.code === 'string'
      && typeof obj.message === 'string'
      && 'body' in obj;
  }

  getAllElections(this: any): Observable<ApiResponse<Election[]>> {
    return this.http.get(this.baseUrl + 'elections', {withCredentials: true});
  }

  addElection(election: Election): Observable<ApiResponse<Election>> {
    return this.http.post<ApiResponse<Election>>(this.baseUrl + 'elections', election)
  }

}
