import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserRoutingModule } from '../user/user-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule, RouterModule,UserRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
