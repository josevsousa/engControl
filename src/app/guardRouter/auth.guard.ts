import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
export const authGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);

  if (true) {
    // mostrar dashboard
    return true;
  } else {
    // nao mostrar dashboard
    router.navigate(['login']);
    return false;
  }

};