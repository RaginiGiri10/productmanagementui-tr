import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';


/*

1. Interceptor is used to add additional info to the incoming request/response.

2. Mention this interceptor in the providers array of app.module.ts

eg: 
 providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ]
*/

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationService = this.injector.get(AuthenticationService)

    let tokenizedRequest = req.clone({
       headers: req.headers.set('Authorization','Bearer '+ authenticationService.getToken())
    })

    return next.handle(tokenizedRequest);
   
  }
}
