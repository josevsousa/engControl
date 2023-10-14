import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  auth: LoginService = inject(LoginService);
  
  constructor(private router: Router){}

  loginGoogle(){
    this.auth.loginGoogle();
  }

  desconectarGoogle(){
    this.auth.desconectarGoogle()
  }

  getUser(){
    return this.auth.user$;
  }

  login(){
    console.log('Login action');
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['dashboard']);
  }

}
