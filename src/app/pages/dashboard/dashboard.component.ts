import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  router: Router = inject(Router);

  constructor(){
    console.log('estou na dashboard');
  }

  logout(){
    const confirmation = confirm('Deseja mesmo sair?');
    if(confirmation){
      localStorage.removeItem('token');
      this.router.navigate(['login'])
    }
  }

}
