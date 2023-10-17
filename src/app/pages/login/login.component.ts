import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';

import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  router: Router = inject(Router);
  auth: LoginService = inject(LoginService);


  /* OPACAO-1 DE PEGAR O USUARIO CONECTADO E CONTROLOAR NO TS */
  // conectado = false;  
  // ngOnInit(){
  //   this.auth.user$.subscribe((user)=>{
  //     if(user.user){

  //       this.conectado = true;
  //     }else{
  //       this.conectado = false;
  //     }
  //   })
  // }

  loginGoogle(){
    this.auth.loginGoogle()
  }

  desconectarGoogle(){
    this.auth.desconectarGoogle()
  }

  
  /* OPACAO-2 DE PEGAR O USUARIO CONECTADO E CONTROLAR NO TAMPLATE */
  getUser(){
    return this.auth.user$;
  }

}
