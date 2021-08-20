import { Router } from '@angular/router';
import { TokenStorageService } from './../services/TokenStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {
  isLoggedIn = false;
  
  username?: string;
  constructor(private tokenStorageService: TokenStorageService , private router : Router ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
    }

  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['home']);
    //window.location.reload();
  }

}
