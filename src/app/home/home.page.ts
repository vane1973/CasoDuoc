import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmationDialogComponent } from '../logout-confirmation-dialog/logout-confirmation-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  fechaHoy: string = '';
  readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);  


  user= {
    email: '',
    password: ''
  }

  constructor(
    private activeroute: ActivatedRoute,
    private storage: Storage,
  ) {

    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        console.log(this.router.getCurrentNavigation().extras.state['user']);
        this.user = this.router.getCurrentNavigation().extras.state['user'];
      }
    });
  }

  ngOnInit() {
    const fecha = new Date();
    this.fechaHoy = fecha.toLocaleDateString() + ' ' + fecha.toLocaleTimeString();
  }

  async verStorage()
  {
    await this.storage.create();
    const email1 = await this.storage.get("email1");
    const email2 = await this.storage.get("email2");

    console.log("Usuarios registrados:");
    if (email1) console.log(email1);
    if (email2) console.log(email2);

  }



  SalirLogin(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationDialogComponent, {
      width: '250px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['acceso']); // Redirige a la página "acceso" si el usuario confirma
      }
    });
  }

}