import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Firestore, collectionData, collection, query  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name?: string;
  uid?: string;
  ativo?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eng-control';

  
  firestore: Firestore = inject(Firestore);
  itens$!: Observable<Item[]>;

  ngOnInit(){
    const itens = collection(this.firestore, 'mestres');
    this.itens$ = collectionData(itens);
  }

}
