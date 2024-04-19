import { Component } from '@angular/core';
import {UserAthService} from'../../servecies/user-ath.service'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLogged:boolean= this._userAuthService.getUserLogged();
  constructor(private _userAuthService :UserAthService ){}

  login(){
    this._userAuthService.login();
    this.isUserLogged = this._userAuthService.getUserLogged()
  }
  logout(){
    this._userAuthService.logout();
    this.isUserLogged = this._userAuthService.getUserLogged()
  }
}
