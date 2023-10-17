import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';
export const loginGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);
  const loginService: LoginService = inject(LoginService);

  return new Promise(resolve => {
    loginService.user$.subscribe(user => {
      // se tiver um user não mostrar essa tela login
      if (user.user) {
        // não mostrar essa tela login e enviar para o dashbord
        router.navigate(['dashboard']);
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })

};