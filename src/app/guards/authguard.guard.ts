import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {UserAthService} from '../servecies/user-ath.service'
export const authguardGuard: CanActivateFn = (route, state) => {

 let _UserAthService = inject(UserAthService);
  let _router = inject(Router)
  if(_UserAthService.getUserLogged()){
    return true
  }
  else{
    _router.navigateByUrl('/Login')
    return false
  }
};
