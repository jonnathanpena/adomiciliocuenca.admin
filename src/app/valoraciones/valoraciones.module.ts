import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule} from 'ng-chartist';

import { ValoracionesRoutes } from './valoraciones.routing';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ComentariosSugerenciasComponent } from './comentarios-sugerencias/comentariosSugerencias.component';


@NgModule({
  imports: [ 
    CommonModule,
    NgbModule,
    ChartistModule,
    RouterModule.forChild(ValoracionesRoutes)
  ],
  declarations: [
    CalificacionesComponent,
    ComentariosSugerenciasComponent
  ]
})

export class ValoracionesModule {}

