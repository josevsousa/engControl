import { Injectable } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  user$ = this.auth.authState.pipe(
    map(user => ({user}))
  )

  constructor(private auth: AngularFireAuth){}

  loginGoogle(){
    this.auth.signInWithPopup(new GoogleAuthProvider())
      .then(()=>{
        console.log(this.user$)
      })
      .catch((error)=> console.log(error))
  }

  desconectarGoogle(){
    this.auth.signOut();
  } 

}
