import { Router } from '@angular/router';
import { User } from './../modele/User.modele';
import { FormsModule } from '@angular/forms';
import { ProfilesService } from './../services/profiles.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from './../modele/profile.modele';
import { TokenStorageService } from './../services/TokenStorage.service';



@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profiles ?: Profile[] ;
  newProfile = new Profile();
  isLoggedIn = false;
  isLoginFailed = false;
  currentUser ?: any ;
  searchText: any;

  constructor( private router : Router ,private profileService : ProfilesService , private tokenStorageservice: TokenStorageService ) { 
    
}
    ngOnInit(): void {
/*
      this.isLoggedIn = !!this.tokenStorageservice.getToken();

      if (this.tokenStorageservice.getToken()) {
        this.isLoggedIn = true;
      this.currentUser = this.tokenStorageservice.getUser();
*/
      this.profileService.getAllProfiles().subscribe(pr => {
        this.profiles=pr;

      } )
    }
     Ondelete(){
      //let conf = confirm("Etes-vous sûr ?");
  
      //if (conf) 
      this.profileService.deleteAllProfiles()
      .subscribe((s) => { console.log("profile supprimé"+s); });
      this.router.navigate(['profiles']);
      //then(() => { window.location.reload()  ;})
 }
       // console.log(this.token.getToken);
  }

  


