import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from 'src/app/home/login/login.component';
import { RegisterComponent } from 'src/app/home/register/register.component';
import { ServiceComponent } from 'src/app/home/service/service.component';
import { ProgramsComponent } from 'src/app/home/programs/programs.component';
import { AboutComponent } from 'src/app/home/about/about.component';
import { TeamComponent } from 'src/app/home/team/team.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FooterHomeComponent } from 'src/app/home/footer-home/footer-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from 'src/app/home/home.component';
import { NavbarHomeComponent } from 'src/app/home/navbar-home/navbar-home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
