import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,ActivatedRoute,  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  loading = true;  // El estado de carga se inicia en verdadero
  fechaHoy: string = '';  // Variable para almacenar la fecha y hora

  user= {
    usuario: '',
    password: ''
  }

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        this.user = navigation.extras.state['user'];
      }
    });
  }


  ngOnInit() {
    // Obtener la fecha y hora actual
    const fecha = new Date();
    this.fechaHoy = fecha.toLocaleString();  // Formato local de fecha y hora

    // Suscripción a los eventos de navegación del router
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;  // Inicia la barra de carga al empezar la navegación
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loading = false;  // Desactiva la barra de carga después de cargar
        }, 1000);  // Puedes ajustar el tiempo según sea necesario
      }
    });
  }

  salir() {
    this.router.navigate(['/acceso']); // Navega hacia la página de acceso
  }
}