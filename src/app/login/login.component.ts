import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../modele/User.modele';
import { AuthService } from '../services/Authentication.service';
import { TokenStorageService } from '../services/TokenStorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor( private authService: AuthService, private tokenStorageservice : TokenStorageService ,private router : Router) {
    
   }
  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageservice.getToken();

      if (this.tokenStorageservice.getToken()) {
        this.isLoggedIn = true;
       this.roles = this.tokenStorageservice.getUser().roles;
      }

  }


   onSubmit(): void {
    
    this.authService.login( this.user ).subscribe(
      data => { 
        console.log('login data', this.user);
        this.tokenStorageservice.saveToken(data.body.body.token);
        this.tokenStorageservice.saveUser(this.user);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageservice.getUser().roles;
        // this.reloadPage();
        this.router.navigate(['dashboard']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
