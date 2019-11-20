import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { PaisComponent } from './paises/pais/pais.component';
import { PaisesListComponent } from './paises/paises-list/paises-list.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { DashAdminComponent } from './components/admin/dash-admin/dash-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    PaisComponent,
    PaisesListComponent,
    RegisterUserComponent,
    DashAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
