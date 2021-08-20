import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { SectionlandingcomponentComponent } from './sectionlandingcomponent/sectionlandingcomponent.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ExperienceComponent } from './experience/experience.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StarsComponent } from './stars/stars.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    NavbarcomponentComponent,
    SectionlandingcomponentComponent,
    ProfilesComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    Navbar2Component,
    ExperienceComponent,
    CreateProfileComponent,
    AddEducationComponent,
    PostsComponent,
    StarsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
