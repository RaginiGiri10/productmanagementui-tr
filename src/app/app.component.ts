import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productmanagementui';
 
  
  constructor(private authenticationService: AuthenticationService) { }
  
  isNavBarVisible(): boolean{
    return this.authenticationService.isLoggedInUser();
  }

}
