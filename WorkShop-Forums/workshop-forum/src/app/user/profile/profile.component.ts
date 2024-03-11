import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { UserForAuth } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userData: UserForAuth | undefined

  constructor(private userService: UserService) {
    this.userData = this.userService.user || undefined;
  }
}
