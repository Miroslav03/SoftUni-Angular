import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: UserForAuth | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password });
  }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {
    return this.http.post<any>('/api/register', { username, email, password, rePassword, tel });
  }

  logout() {

  }
}
