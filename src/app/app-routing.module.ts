import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AboutComponent } from './shared/components/about/about.component';
import { LoginComponent } from './admin/users/login/login.component';
import { RegisterComponent } from './admin/users/register/register.component';

const routes: Routes = [
  {path:'admin',component: AdmindashboardComponent },
  {path:'about',component: AboutComponent },
  {path:'login',component: LoginComponent },
  {path:'register',component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
