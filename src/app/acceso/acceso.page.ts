import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {
  usuario: string = '';
  password: number | undefined;

  constructor() { }

  ngOnInit() {
  }

}
