import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const CycleGuard: CanActivateFn = () => {

  const router = inject(Router)
  const authService = inject(AuthService)

  if(authService.getRole() != null){
    return true
  }
  else{
    router.navigateByUrl("/login")
    return false
  }
};
