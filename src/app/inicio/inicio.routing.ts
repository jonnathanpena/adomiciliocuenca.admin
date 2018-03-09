import { Routes } from '@angular/router';

import { InicioComponent } from './inicio.component';

export const InicioRoutes: Routes = [
  {
    path: '',
    data: {
          title: 'Inicio',
          urls: [{title: 'Inicio',url: '/inicio'},{title: 'Inicio'}]
      },
    component: InicioComponent
  }
];
