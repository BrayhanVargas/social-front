import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoints } from 'src/resources/endpoints';
import { Login } from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    public endpoints: Endpoints
  ) { }

  login(formData: any) {
    console.log(`${environment.API_URL}${this.endpoints.urlLogin}`);
    return this.http.post<Login>(`${environment.API_URL}${this.endpoints.urlLogin}`, formData);
  }

  signup(formData: any) {
    console.log(`${environment.API_URL}${this.endpoints.urlSignup}`);
    return this.http.post<any>(`${environment.API_URL}${this.endpoints.urlSignup}`, formData);
  }

}
