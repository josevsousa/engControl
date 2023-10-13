import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export default class InicioComponent {

  auth: LoginService = inject(LoginService);
  
  getUser(){
    return this.auth.user$;
  }

  loginGoogle(){
    this.auth.loginGoogle();
  }

  desconectarGoogle(){
    this.auth.desconectarGoogle();
  } 

}
