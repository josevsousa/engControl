import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import InicioComponent from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'inicio'
    },
    {
        path: 'inicio',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'funcionarios-crud',
        loadChildren: ()=> 
            import('./pages/funcionarios-crud/funcionarios.router').then((routes) => routes.funcionariosRouter)
    },
    {
        path: '**',
        component: InicioComponent,
        title: 'inicio'
    }    
];
