import { Routes } from '@angular/router';

import { IngresadosComponent } from './ingresados/ingresados.component';
import { OlvidadosComponent } from './olvidados/olvidados.component';
import { ListadoPedidosComponent } from './listado-pedidos/listadoPedidos.component';

export const PedidoRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'ingresados',
      component: IngresadosComponent,
      data: {
        title: 'Pedidos Ingresados',
        urls: [{title: 'Pedidos',url: '/pedido/ingresados'},{title: 'Pedidos Ingresados'}]
      }
    }, {
      path: 'olvidados',
      component: OlvidadosComponent,
      data: {
        title: 'Pedidos Olvidados',
        urls: [{title: 'Pedidos',url: '/pedido/olvidados'},{title: 'Pedidos Olvidados'}]
      }
    }, {
      path: 'listado-pedidos',
      component: ListadoPedidosComponent,
      data: {
        title: 'Listado por Fecha',
        urls: [{title: 'Pedidos',url: '/pedido/listado-pedidos'},{title: 'Listado por Fecha'}]
      }
    }]
  }
];
