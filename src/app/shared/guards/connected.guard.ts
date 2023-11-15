import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const connectedGuard: CanActivateFn = () => {

  const router = inject(Router)
  const authService = inject(AuthService)

  if(authService.getToken()){
    return true
  }
  else{
    router.navigateByUrl("/admin")
    return false
  }
};
