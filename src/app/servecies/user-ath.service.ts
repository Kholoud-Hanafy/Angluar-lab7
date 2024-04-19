import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAthService {
 private userBehivourSubject:BehaviorSubject<boolean>
  constructor() {

    this.userBehivourSubject = new BehaviorSubject<boolean>(false)
   }


  login(){
    localStorage.setItem('token',"jjfiiisksswppwpwefjjkks")
    this.userBehivourSubject.next(true)
  }

  logout(){
    localStorage.removeItem('token')
    this.userBehivourSubject.next(false)
  }
  getUserLogged():boolean{

  return  localStorage.getItem('token')? true : false;
  }
  getuserBehivourSubject(){
    return this.userBehivourSubject
  }

}
