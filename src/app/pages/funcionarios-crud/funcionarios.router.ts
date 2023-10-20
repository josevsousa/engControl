import { Routes } from "@angular/router";
import { FuncionariosListComponent } from "./funcionarios-list/funcionarios-list.component";
import { FuncionariosAddComponent } from "./funcionarios-add/funcionarios-add.component";

export const funcionariosRouter: Routes = [
  {
     path: '',
     component: FuncionariosListComponent,
     title: 'funcionario-list'
  },
  {
     path: 'funcionario-add',
     component: FuncionariosAddComponent,
     title: 'funcionario-add'
  },
  {
   path: '**',
   component: FuncionariosListComponent,
   title: 'funcionario-list'
  }   
 ]