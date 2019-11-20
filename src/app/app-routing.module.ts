import { DashAdminComponent } from './components/admin/dash-admin/dash-admin.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { PaisesListComponent } from './paises/paises-list/paises-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'paises', component: PaisesListComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'admin', component: DashAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
