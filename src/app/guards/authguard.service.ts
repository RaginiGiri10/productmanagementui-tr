import { AuthenticationService } from './../services/authentication/authentication.service';
import {  CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
              private router:Router) { }
  canActivate(): boolean  {
   
    if (this.authenticationService.isLoggedInUser()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
