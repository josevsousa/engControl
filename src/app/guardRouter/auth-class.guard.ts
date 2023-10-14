import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard {
  
  constructor( private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(route);
      // console.log(state);
      // // const router: Router = inject(Router);
      const token = localStorage.getItem('token');
      // console.log('Estou no authGuard');
      // console.log('token', token);
    
      if (token) {
        return false;
        this.router.navigate(['dashboard']);
      } else {
        return true;
      } 

  }
  
}
