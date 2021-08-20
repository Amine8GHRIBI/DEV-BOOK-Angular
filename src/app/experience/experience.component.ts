import { Experience } from './../modele/experience.modele';
import { ExperienceService } from './../services/experience.service';
import { Profile } from './../modele/profile.modele';
import { Router } from '@angular/router';
import { ProfilesService } from './../services/profiles.service';
import { TokenStorageService } from './../services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  currentUser ?: any ;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentprofile ?:any;
  
  motdepasse ?: any ;
  username ?: any;
  newExperience = new Experience();
  constructor( private  router : Router , private profileservice :  ProfilesService , 
     private tokenStorageservice : TokenStorageService , private experienceservice : ExperienceService )  { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageservice.getToken();

    if (this.tokenStorageservice.getToken()) {
      this.isLoggedIn = true;
     //this.roles = this.tokenStorageservice.getUser().roles;
    }
  this.currentUser = this.tokenStorageservice.getUser();
  this.motdepasse=this.currentUser.password;
  this.username=this.currentUser.username;
  }

  addExperience() {
           console.log(this.username);
           console.log("exp data service"+ this.newExperience);
           this.experienceservice.createExperience( this.newExperience , this.username)
           .subscribe(
             () => { console.log("experience added"); }
             );
                      
           this.router.navigate(['dashboard']).then(() => {
            window.location.reload();
          });;
           
  }

 
           
           
}
