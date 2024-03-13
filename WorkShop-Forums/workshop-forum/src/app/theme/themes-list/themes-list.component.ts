import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];

  constructor(private api: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes;
    })
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  isSubscribed(theme: Theme): boolean {
    if (theme._id === this.userService.user?.id) {
      return true;
    }else{
      return false;
    }
  }
}
