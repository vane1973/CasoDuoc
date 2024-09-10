import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage {

  // Datos del formulario
  user = {
    usuario: '',
    password: ''
  };

  // Mensaje de error
  errorMessage: string = '';

  constructor(private router: Router) { }

  ingresar() {
    // Validar si los campos están vacíos
    if (this.user.usuario === '' || this.user.password === '') {
      this.errorMessage = 'Ingrese usuario y contraseña';
      return;
    }

    // Validar si la contraseña es menor de 8 caracteres
    if (this.user.password.length < 8) {
      this.errorMessage = 'Ingrese una contraseña de 8 dígitos';
      return;
    }

    // Validar usuario y contraseña
    if (this.user.usuario === 'juan' && this.user.password === 'juan1234') {
      // Redirigir al home si las credenciales son correctas
      this.router.navigate(['/home']);
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      this.errorMessage = 'Usuario o contraseña incorrecta';
    }
  }

  // Función para redirigir a la página de restablecimiento de contraseña
  recuperar() {
    this.router.navigate(['/restablecer']);
  }

}
