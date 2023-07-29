import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ManageUsersComponent } from './admin/users/manage-users/manage-users.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { GlobalbannerComponent } from './shared/components/globalbanner/globalbanner.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './admin/users/login/login.component';
import { RegisterComponent } from './admin/users/register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ManageUsersComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NavComponent,
    GlobalbannerComponent,
    AdmindashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
