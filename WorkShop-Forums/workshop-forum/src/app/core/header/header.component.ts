import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserForAuth } from 'src/app/types/user';
import { UserService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get username(): string {
    return this.userService.user?.username || '';
  }
  get isLoggedIn(): boolean {
    return !!this.userService.isLogged;
  }

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
