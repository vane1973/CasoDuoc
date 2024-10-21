import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user = {} as User; 

  constructor(
    private toastCtrl: ToastController,
    private aFauth: AngularFireAuth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  async registro(user: User) {
    if (this.formValidation()) {
      try {
        const data = await this.aFauth.createUserWithEmailAndPassword(user.email, user.password);
        console.log(data);
        this.navCtrl.navigateRoot("home");
      } catch (error: any) {
        const errormessage = error.message || "Error al registrar usuario";
        this.showToast(errormessage);
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
      duration: 4000
    }).then(toastData => toastData.present());
  }

}
