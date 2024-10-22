
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AlumnoPage } from '../alumno/alumno.page'; 
import { ProfesorPage } from '../profesor/profesor.page'; 

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'alumno',
        component: AlumnoPage
      },
      {
        path: 'profesor',
        component: ProfesorPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
