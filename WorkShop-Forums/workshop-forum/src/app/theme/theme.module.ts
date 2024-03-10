import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent
  ]
})
export class ThemeModule { }
