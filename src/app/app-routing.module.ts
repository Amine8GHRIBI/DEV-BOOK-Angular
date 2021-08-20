import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { RegisterComponent } from './register/register.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ExperienceComponent} from './experience/experience.component';
import {PostsComponent} from './posts/posts.component';
import { AddEducationComponent} from './add-education/add-education.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path : 'profiles',component : ProfilesComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path :'experience' , component : ExperienceComponent},
  {path : 'posts' , component : PostsComponent},
  {path : 'add-education' , component : AddEducationComponent},
   {path : 'create-profile' , component : CreateProfileComponent},
  {path: '**',component: NoPageFoundComponent}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
