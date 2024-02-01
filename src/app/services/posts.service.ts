import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endpoints } from 'src/resources/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
    public endpoints: Endpoints
  ) { }

  getPosts(userId: number){
    const authToken = localStorage.getItem('_token');
    const url = `${environment.API_URL}${this.endpoints.urlPosts}`;
    const params = new HttpParams().set('userId', userId.toString());
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
    console.log("getPosts", url)

    return this.http.get<any>(url, { params, headers });
  }

  getAllPosts(){
    const authToken = localStorage.getItem('_token');
    const url = `${environment.API_URL}${this.endpoints.urlAllPosts}`;
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });

    console.log("getAllPosts", url)

    return this.http.get<any>(url, { headers });
  }
}
