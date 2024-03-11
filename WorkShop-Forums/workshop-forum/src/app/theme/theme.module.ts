import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
  ],

})
export class ThemeModule { }
