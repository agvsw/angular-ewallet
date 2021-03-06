import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ChartExComponent } from './component/chart-ex/chart-ex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AboutComponent } from './home/about/about.component';
import { ServiceComponent } from './home/service/service.component';
import { ProgramsComponent } from './home/programs/programs.component';
import { TeamComponent } from './home/team/team.component';
import { NavbarHomeComponent } from './home/navbar-home/navbar-home.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DataTablesModule } from 'angular-datatables';
import { CustomerComponent } from './component/customer/customer.component';
import { ChartsModule } from 'ng2-charts';
import { HistoryForexComponent } from './component/history-forex/history-forex.component';
import { KursComponent } from './component/kurs/kurs.component';
import { ListAccComponent } from './component/list-acc/list-acc.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ServiceComponent,
    ProgramsComponent,
    TeamComponent,
    NavbarHomeComponent,
    FooterHomeComponent,
    
    SidebarComponent,
    NavbarComponent,
    KursComponent,
    ListAccComponent,
    NotFoundComponent,
    //HistoryForexComponent,
    
    // ChartExComponent,
    
    
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
