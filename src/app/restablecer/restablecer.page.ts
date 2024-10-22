import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthEmailService } from '../services/auth-email.service';



@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {
  user = { email: '' }; // Objeto para almacenar el correo del usuario

  constructor(private AuthEmailService: AuthEmailService, private toastCtrl: ToastController) {}

  async recuperarpassword() {
    if (!this.user.email) {
      this.showToast('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      await this.AuthEmailService.sendPasswordResetEmail(this.user.email);
      this.showToast('Se ha enviado un correo de restablecimiento.');
    } catch (error) {
      this.showToast('Error al enviar el correo: ' + error.message);
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    }).then(toast => toast.present());
  }
}
