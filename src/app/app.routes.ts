import { Routes } from '@angular/router';
import { authGuard } from './guardRouter/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "login"
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: "Dashboard"
        // canActivate: [authGuard]
    },
    {
        path: 'funcionarios-crud',
        loadChildren: ()=> 
            import('./pages/funcionarios-crud/funcionarios.router').then((routes) => routes.funcionariosRouter)
    },
    {
        path: "**",
        component: LoginComponent,
        title: "login"
    }

];
