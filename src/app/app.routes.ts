import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthClassGuard } from './guardRouter/auth-class.guard';
import { authGuard } from './guardRouter/auth.guard';
import { roleGuard } from './guardRouter/role.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
     },
    {
        path: 'login',
        component: LoginComponent,
        title: "login",
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: "Dashboard",
        // canActivate: [authGuard, roleGuard],
        // data: {
        //     cargo: 'ADMIN'
        // }
    },
    {
        path: 'funcionarios-crud',
        loadChildren: ()=> 
            import('./pages/funcionarios-crud/funcionarios.router').then((routes) => routes.funcionariosRouter)
    },
    {
        path: "**",
        pathMatch: 'full',
        redirectTo: '/login'
    }

];
