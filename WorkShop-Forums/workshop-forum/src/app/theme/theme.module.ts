import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent,
    ThemeContentComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CoreModule,
    FormsModule
  ],

})
export class ThemeModule { }
