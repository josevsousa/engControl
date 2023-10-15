import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  router: Router = inject(Router);
  auth: LoginService = inject(LoginService);

  constructor(){
    console.log('estou na dashboard');
  }

  logout(){
    const confirmation = confirm('Deseja mesmo sair?');
    if(confirmation){
      // localStorage.removeItem('token');
      this.auth.desconectarGoogle();
    }
  }

}
