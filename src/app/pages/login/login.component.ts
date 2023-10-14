import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  auth: LoginService = inject(LoginService);

  loginGoogle(){
    this.auth.loginGoogle();
  }

  desconectarGoogle(){
    this.auth.desconectarGoogle()
  }

  getUser(){
    return this.auth.user$;
  }

}
