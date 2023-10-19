import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  constructor(
    private router: Router,
    private auth: LoginService,
    public dialog: MatDialog
    ){
    console.log('estou na dashboard');
  }
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  logout(){
    console.log("desconectando do google")
    // const confirmation = confirm('Deseja mesmo sair?');
    // if(confirmation){
    //   this.auth.desconectarGoogle();
    // }
  }

}

// --------------------------------------------------------

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private auth: LoginService,
    ) {}

    logout(){
      setTimeout(()=>{
        this.auth.desconectarGoogle();
      },550)
    }

}
