import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {
  user={
    usuario:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.router.navigate(['/home'],navigationExtras); 
  }
  validarLogin(){
    if(this.user.usuario.length >= 10 && this.user.usuario.length <= 15 && this.user.password.length == 4 && this.user.password.match(/^\d{4}$/)){
      this.ingresar();  
    }
    else{
      alert("Usuario y/o contraseña incorrectos");
    }
  }

  restablecer(){
    let navigationExtras: NavigationExtras={
     
    }
    this.router.navigate(['/restablecer'],navigationExtras);
  }

  

}
