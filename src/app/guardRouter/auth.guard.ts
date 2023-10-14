import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router'; 
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route) =>{

    const auth: LoginService = inject(LoginService);

    const router = inject(Router);

    if(auth.user$ == null){
        return true;   

    }else{
        router.navigate(['login'])
        return false;   
    }

   
}