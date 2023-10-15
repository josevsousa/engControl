import { Injectable, inject } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAuth } from '@angular/fire/auth';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  router: Router = inject(Router);
  
  //  authUser = getAuth();
  // userLogad = this.authUser.currentUser;
  userLogad = true;

  user$ = this.auth.authState.pipe(
    map(user => ({
      user
    }))
  )

  constructor(
    private auth: AngularFireAuth){
    }

  loginGoogle(){
    this.auth.signInWithPopup(new GoogleAuthProvider())
      .then(()=>{
        this.router.navigate(['dashboard']);

      })
      .catch((error)=> console.log(error))
  }

  desconectarGoogle(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['login']);
    });
  } 

  userConectado(){
    console.log(this.user$)
  }
  
}
