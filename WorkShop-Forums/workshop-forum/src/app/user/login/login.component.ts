import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private routes: Router, form: NgForm) { }


  handleLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(user => {
      this.userService.user = user;
      this.routes.navigate(['/themes'])
    });
  }
}
