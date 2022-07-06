import { ILogin } from './../../../models/authentication/login/login';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: ILogin ={
    userName: '',
    password:''
  }

  loginErrors: string[] = []  
  hasErrors: boolean = false;
  constructor(private authenticationService: AuthenticationService,
              private router:Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    
    console.log(this.loginDetails)
    this.authenticationService.login(this.loginDetails)
      .subscribe({
        next: response => {
          localStorage.setItem('prptoken', response.token)
          this.router.navigate(['/home'])
        },
        error: err => {
          this.hasErrors = true
          this.loginErrors = err.error.errors.toString().split(',');            
        }
        })
  }
  

}
