import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, CartService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartCount: Observable<number> = this.cartService.cartCount

  


  get userIsAuthenticated(){
    return this.authservice.token
  }
  get user(){
    return this.authservice.user
  }

    constructor(
      private authservice: AuthService,
      private cartService: CartService
    ){}

    signOut(){
     localStorage.clear()
    }
}
