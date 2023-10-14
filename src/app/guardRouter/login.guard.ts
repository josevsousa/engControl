import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// const router = new Router();

export const loginGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return false;
  } else {
    router.navigate(['login']);
    return true;
  }
  
};