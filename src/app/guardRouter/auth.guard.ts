import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
export const authGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);
  const loginService: LoginService = inject(LoginService);

  return new Promise(resolve => {
    loginService.user$.subscribe(user => {
      // se tiver um user devolva true para o return
      if (user.user) {
        resolve(true);
      } else {
        router.navigate(['login']);
        resolve(false);
      }
    })
  })

};