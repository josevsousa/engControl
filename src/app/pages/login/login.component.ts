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

  auth: LoginService = inject(LoginService);
  status = false;  
  
  constructor(private router: Router){
    this.auth.user$.subscribe((user)=>{
      if(user.user){
        this.status = true;
      }else{
        this.status = false;
      }
    })
  }

  loginGoogle(){
    this.auth.loginGoogle()
  }

  desconectarGoogle(){
    this.auth.desconectarGoogle()
  }

  getUser(){
    return this.auth.user$;
  }

}
