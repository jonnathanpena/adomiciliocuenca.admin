import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { PedidoRoutes } from './pedido.routing';
import { IngresadosComponent } from './ingresados/ingresados.component';
import { OlvidadosComponent } from './olvidados/olvidados.component';
import { ListadoPedidosComponent } from './listado-pedidos/listadoPedidos.component';


@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(PedidoRoutes)
  ],
  declarations: [
    IngresadosComponent,
    OlvidadosComponent,
    ListadoPedidosComponent
  ]
})

export class PedidoModule {}
