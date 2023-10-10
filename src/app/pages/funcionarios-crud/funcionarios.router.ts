import { Routes } from "@angular/router";
import { FuncionariosListComponent } from "./funcionarios-list/funcionarios-list.component";
import { FuncionariosAddComponent } from "./funcionarios-add/funcionarios-add.component";
import { FuncionariosDelComponent } from "./funcionarios-del/funcionarios-del.component";

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
     path: 'funcionario-del',
     component: FuncionariosDelComponent,
     title: 'funcionario-del'
  }   
 ]