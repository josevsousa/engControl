import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  
  const cargo = route.data['cargo'];
  const router = inject(Router);
  
  if (cargo === 'ADMIN') {
    return true;
  } else {
    router.navigate(['login'])
    return false;    
  }
  // return true;

};
