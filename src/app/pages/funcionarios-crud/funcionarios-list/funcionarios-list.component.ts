import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Funcionario } from 'src/app/interface/funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funcionarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.scss']
})
export class FuncionariosListComponent implements OnInit {

  loading: boolean = false;

  funcionarioService: FuncionarioService = inject(FuncionarioService);
  funcionarios$!: Observable<Funcionario[]>;

  ngOnInit(){
    this.funcionarios$ = this.funcionarioService.getFuncionarios()
    this.funcionarios$.subscribe(()=> this.loading = true );
  }

}
