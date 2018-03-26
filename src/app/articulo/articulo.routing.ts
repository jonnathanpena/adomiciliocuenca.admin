import { Routes } from '@angular/router';

import { CrearCategoriaComponent } from './crear-categoria/crearCategoria.component';
import { CrearItemComponent } from './crear-item/crearItem.component';
import { CrearSubcategoriaComponent } from './crear-subcategoria/crearSubcategoria.component';
import { ListadoItemsComponent } from './listado-items/listadoItems.component';


export const ArticuloRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'crear-categoria',
      component: CrearCategoriaComponent,
      data: {
        title: 'Crear Categoría',
        urls: [{title: 'Artículos',url: '/articulo/crear-categoria'},{title: 'Crear Categoría'}]
      }
    }, {
      path: 'crear-item',
      component: CrearItemComponent,
      data: {
        title: 'Crear Ítem',
        urls: [{title: 'Artículos',url: '/articulo/crear-item'},{title: 'Crear Ítem'}]
      }
    }, {
      path: 'crear-subcategoria',
      component: CrearSubcategoriaComponent,
      data: {
        title: 'Crear Subcategoría',
        urls: [{title: 'Artículos',url: '/articulo/crear-subcategoria'},{title: 'Crear Subcategoría'}]
      }
    },  {
        path: 'listado-items',
        component: ListadoItemsComponent,
        data: {
          title: 'Listado Ítems',
          urls: [{title: 'Artículos',url: '/articulo/listado-items'},{title: 'Listado Ítems'}]
        }
    }] 
  }
];
