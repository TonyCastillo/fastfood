import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json'
  });

  registerUser( name: string, email: string, password: string ){
    const url_api = 'http://127.0.0.1:8000/api/registro';
    return this.http.post(url_api,
      {name: name, email: email, password: password},
      {headers: this.headers}
    ).pipe(map(data => data));
  }

  setToken(){

  }
  getToken(){
    return "token";
  }

}
