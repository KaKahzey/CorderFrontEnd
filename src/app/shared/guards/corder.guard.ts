import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const CorderGuard: CanActivateFn = () => {

  const router = inject(Router)
  const authService = inject(AuthService)

  if(authService.getRole() === 'ADMIN'){
    return true
  }
  else{
    router.navigateByUrl("/admin/validated-photos")
    return false
  }
};
