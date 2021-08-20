import { Education } from './../modele/education.modele';
import { EducationService } from './../services/education.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent implements OnInit {
  currentUser ?: any ;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentprofile ?:any;
  
  motdepasse ?: any ;
  username ?: any;
   newEducation = new Education(); 
  constructor(private  router : Router ,private tokenStorageservice : TokenStorageService
     , private EducationService : EducationService) { }

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


  addEducation(){
                   this.EducationService.createEducation(this.newEducation,this.username).subscribe(
                     () => {console.log("experience added");}
                   );
                   this.router.navigate(['dashboard']).then(() => {
                    window.location.reload();
                  });;
  }

}
