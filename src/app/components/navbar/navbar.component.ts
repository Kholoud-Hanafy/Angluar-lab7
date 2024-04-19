import { Component, OnInit } from '@angular/core';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import {UserAthService} from '../../servecies/user-ath.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn!:boolean;
  constructor(private _userAuthService : UserAthService){}
  ngOnInit(): void {
  // this.isUserLoggedIn =this._userAuthService.getUserLogged()
  this._userAuthService.getuserBehivourSubject().subscribe({
    next : (status)=>{
      this.isUserLoggedIn = status
    }
  })
   
  }
}
