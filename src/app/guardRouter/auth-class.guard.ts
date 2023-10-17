import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Primitive } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard {
  
  constructor( 
    private router: Router,
    private loginService: LoginService
    ){}

  // canActivate(): Promise<boolean> {
  //   return new Promise(resolve => {
  //     this.loginService.user$.subscribe(user => {
  //       if (user.user) {
  //         resolve(true);
  //       } else {
  //         this.router.navigate(['login']);
  //       }
  //     })
  //   })
  // }
  
}
