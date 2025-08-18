import { Routes } from '@angular/router';
import { Lista } from './usuarios/lista/lista';
import { Usuario } from './usuarios/usuario/usuario';

export const routes: Routes = [

  { path: 'home', component: Lista},
  { path: 'usuarios/:id', component: Usuario},
  { path: '**', redirectTo: 'home'},
];
