import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  fechaHoy: string = '';  // Variable para almacenar la fecha y hora

  user= {
    usuario: '',
    password: ''
  }

  constructor(private activeroute: ActivatedRoute, private router:Router) {
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
}