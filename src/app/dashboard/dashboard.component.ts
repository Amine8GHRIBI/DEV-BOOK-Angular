import { EducationService } from './../services/education.service';
import { User } from './../modele/User.modele';
import { TokenStorageService } from './../services/TokenStorage.service';
import { ProfilesComponent } from './../profiles/profiles.component';
import { Profile } from './../modele/profile.modele';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './../services/profiles.service';
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExperienceService } from './../services/experience.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser ?: any ;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentprofile = new Profile();
  motdepasse ?: any ;
  username : String = "";

  constructor( private  router : Router , private profileservice :  ProfilesService 
    , private experienceservice : ExperienceService, private tokenStorageservice : TokenStorageService,
     private educationService : EducationService)   { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageservice.getToken();

      if (this.tokenStorageservice.getToken()) {
        this.isLoggedIn = true;
       //this.roles = this.tokenStorageservice.getUser().roles;
      }
    this.currentUser = this.tokenStorageservice.getUser();
    this.motdepasse=this.currentUser.password;
     this.username=this.currentUser.username;
     console.log(this.username);
   this.profileservice.getProfileByMail(this.username).subscribe(p => {
    this.currentprofile= p} );
    console.log("nom"+this.currentprofile.nom);
}

logout(): void {
  this.tokenStorageservice.signOut();
  this.router.navigate(['home']);
  //window.location.reload();
}


DeleteExperience(id  : Number){
  this.experienceservice.deleteExperience(id).subscribe(() => {console.log("experience supprimé")});
  window.location.reload();
  }


  DeleteEducation(id :Number){
    this.educationService.deleteEducation(id).subscribe(() =>{console.log("education supprimé")} );
    window.location.reload();
  }
/*
  DeleteProfile (){
  let conf = confirm("Etes-vous sûr ?");
  console.log(this.username);
  if (conf) this.profileservice.DeleteProfile(this.username)
  .subscribe(() => { console.log("profile supprimé"); });
  this.logout(); 
  //this.router.navigate(['profiles']).then(() => { window.location.reload()  ;})
   }

  
*/

/*
   getProfile(){
    this.profileservice.getProfileByMail(this.username).subscribe((p) =>
    {this.currentprofile= p} );

  }
*/

}