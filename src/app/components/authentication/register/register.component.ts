import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/models/authentication/register/register';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationDetails: IRegister = {
    email: '',
    password: '',
    confirmPassword:''
    
  }

  registrationErrors: string[] = []  
  hasErrors: boolean = false;


  constructor(private authenticationService: AuthenticationService,
             private router:Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    
    this.registrationErrors = [];
    console.log(this.registrationDetails)
    this.authenticationService.register(this.registrationDetails)
      .subscribe({
        next: (_) => {         
          console.log("User is successfully registered")
          this.router.navigate(['/login'])
             },
        error: (err: HttpErrorResponse) => {
          this.hasErrors = true;
          console.log('Registration Errors')
          if (err.status != 500) {
            Object.keys(err.error.errors).forEach(e => {
              this.registrationErrors.push(err.error.errors[e])
            })
          }
          else {
            this.registrationErrors = err.error.errors?.toString().split(',')
            console.log(this.registrationErrors)
          }
        }})
  } 

}
