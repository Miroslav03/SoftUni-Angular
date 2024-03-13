import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private routes: Router) { }

  login(event: Event) {
    event.preventDefault();
    this.userService.login();
    this.routes.navigate(['/home'])
  }

  handleLogin() {

  }
}
