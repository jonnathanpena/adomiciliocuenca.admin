import { Routes } from '@angular/router';


import { ComisionesGeneradasComponent } from './comisiones-generadas/comisionesGeneradas.component';
import {EstadisticaComponent } from './estadistica/estadistica.component';
import { ReportesVentaComponent } from './reportes-venta/reportesVenta.component';

export const InformesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'comisiones-generadas',
      component: ComisionesGeneradasComponent,
      data: {
        title: 'Comisiones Generadas',
        urls: [{title: 'Informes',url: '/informes/comisiones-generadas'},{title: 'Comisiones Generadas'}]
      }
    }, {
      path: 'estadistica',
      component: EstadisticaComponent,
      data: {
        title: 'Estadística',
        urls: [{title: 'Informes',url: '/informes/estadistica'},{title: 'Estadística'}]
      }
    }, {
      path: 'reportes-venta',
      component: ReportesVentaComponent,
      data: {
        title: 'Reportes de Ventas',
        urls: [{title: 'Informes',url: '/informes/reportes-venta'},{title: 'Reportes de Ventas'}]
      }
    }]
  }
];
