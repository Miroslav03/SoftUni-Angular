import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getThemes() {
    const api = 'http://localhost:3000/api';
  }

  getPosts(limit?: number) {

  }
}
