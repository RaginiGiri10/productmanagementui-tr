import { ILoginResponse } from './../../models/authentication/login/loginResponse';
import { ILogin } from './../../models/authentication/login/login';
import { IRegister } from '../../models/authentication/register/register';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegisterResponse } from 'src/app/models/authentication/register/registerResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseAuthenticationUrl:string = environment.baseApiUrl + 'authentication/'
  constructor(private httpClient: HttpClient,
                  private router:Router) { }
  
  register(registerData: IRegister):Observable<IRegisterResponse> {    
    return this.httpClient.post<IRegisterResponse>(this.baseAuthenticationUrl, registerData);
  }

  login(loginData: ILogin):Observable<ILoginResponse> {
    
    return this.httpClient.post<ILoginResponse>(this.baseAuthenticationUrl +'login',loginData)
  }

  isLoggedInUser(): boolean{
    return !!localStorage.getItem('prptoken')
  }

  logout() {
    localStorage.removeItem('prptoken')
    this.router.navigate(['/login'])
  }

  getToken(){    
    return localStorage.getItem('prptoken')
  }
}
