import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// const router = new Router();

export const authGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);
  const token = localStorage.getItem('token');
 
  console.log('********** Estou no authGuard');
  console.log('********** token', token);

  if (token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
  
};