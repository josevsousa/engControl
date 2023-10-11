import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Funcionario } from '../interface/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  firestore: Firestore = inject(Firestore);
 
  getFuncionarios(){
    const funcionarios = collection(this.firestore, 'funcionarios');
    let q = query(funcionarios);
    return collectionData(q) as unknown as Observable<Funcionario[]>
  }

}
