import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get userIsAuthenticated(){
    return this.authservice.token
  }
  get user(){
    return this.authservice.user
  }

    constructor(
      private authservice: AuthService
    ){}

    signOut(){
     localStorage.clear()
    }
}
