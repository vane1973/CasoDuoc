import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {
  user = {} as User; 
 
  constructor(
    private router: Router,
    private storage: Storage,
    private toastCtrl: ToastController,
    private aFauth: AngularFireAuth,
    private navCtrl: NavController) {}
    

  async ngOnInit() {

    await this.storage.create();
  }

  async acceso(user: User) {
    if (this.formValidation()) {
      this.showToast("Espere un momento por favor...");

      try {
        await this.aFauth.signInWithEmailAndPassword(user.email, user.password).then(async data => {
          console.log(data);
          await this.datos();
          this.navCtrl.navigateRoot("home");
        });
      } catch (e: any) {
        let errorMessage = e.message || e.getLocalizedMessage();
        this.showToast("Usuario no registrado: " + errorMessage);
      }
    }
  }

formValidation() {
  if (!this.user.email) {
    this.showToast("Ingrese un email");
    return false;
  }

  if (!this.user.password) {
    this.showToast("Ingrese una contraseña");
    return false;
  }

  return true;
}

showToast(message: string) {
  this.toastCtrl.create({
    message: message,
    duration: 5000
  }).then(toastData => toastData.present());
}


  restablecer(){
    let navigationExtras: NavigationExtras = {};
    this.router.navigate(['/restablecer'], navigationExtras);
  }

  registro(){
    let navigationExtras: NavigationExtras = {};
    this.router.navigate(['/registro'],navigationExtras)

    }

    datos(){
      this.storage.set("email1", "ju.reyesm@duocuc.cl");
      this.storage.set("email2", "van.arias@duocuc.cl");
  
      console.log("Correos registrados en Storage");
    }

    
  

}
