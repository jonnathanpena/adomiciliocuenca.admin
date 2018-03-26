import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { ArticuloRoutes } from './articulo.routing';
import { CrearCategoriaComponent } from './crear-categoria/crearCategoria.component';
import { CrearItemComponent } from './crear-item/crearItem.component';
import { CrearSubcategoriaComponent } from './crear-subcategoria/crearSubcategoria.component';
import { ListadoItemsComponent } from './listado-items/listadoItems.component';


@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(ArticuloRoutes)
  ],
  declarations: [
    CrearCategoriaComponent,
    CrearItemComponent,
    CrearSubcategoriaComponent,
    ListadoItemsComponent
  ]
})

export class ArticuloModule {}
