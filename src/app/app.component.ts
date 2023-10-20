import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { LoginService } from './services/login.service';
// -------- components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterOutlet,
    MatToolbarModule,
    ToolbarComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth: LoginService = inject(LoginService);
  router: Router = inject(Router);

  getUser(){
    return this.auth.user$;
  }

  
}
