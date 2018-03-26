import { Routes } from '@angular/router';

import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ComentariosSugerenciasComponent } from './comentarios-sugerencias/comentariosSugerencias.component';



export const ValoracionesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'calificaciones',
      component: CalificacionesComponent,
      data: {
        title: 'Calificaciones',
        urls: [{title: 'Valoraciones',url: '/valoraciones/calificaciones'},{title: 'Calificaciones'}]
      }
    }, {
      path: 'comentarios-sugerencias',
      component: ComentariosSugerenciasComponent,
      data: {
        title: 'Comentarios y Sugerencias',
        urls: [{title: 'Valoraciones',url: '/valoraciones/comentarios-sugerencias'},{title: 'Comentarios y Sugerencias'}]
      }
    }] 
  }
];
