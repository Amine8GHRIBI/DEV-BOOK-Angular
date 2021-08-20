import { ProfilesService } from './../services/profiles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../modele/profile.modele';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newProfile = new Profile ();


  constructor(private profilesService : ProfilesService , private router :Router) { }

  AddProfile(){
    this.profilesService.createProfile(this.newProfile).subscribe(pro => {
      console.log("profile" + pro);
    })
    this.router.navigate(['login']);
  }
  
  ngOnInit(): void {

  }



}
