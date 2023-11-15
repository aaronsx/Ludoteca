import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorAlquierComponent } from '../contenedor-alquier/contenedor-alquier.component';
import { ListaAlquilerComponent } from '../lista-alquiler/lista-alquiler.component';
import { DetalleAlquilerComponent } from '../detalle-alquiler/detalle-alquiler.component';

const routes: Routes = [
  {path: '', component: ContenedorAlquierComponent, children:
    [
      {path:'listado', component: ListaAlquilerComponent},
      {path:'detalle/:id', component: DetalleAlquilerComponent},
      {path:'agregar', component: DetalleAlquilerComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerRoutingModule { }
