import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorJuegoComponent } from '../contenedor-juego/contenedor-juego.component';
import { ListaJuegoComponent } from '../lista-juego/lista-juego.component';
import { DetalleJuegoComponent } from '../detalle-juego/detalle-juego.component';

const routes: Routes = [
  {path: '', component: ContenedorJuegoComponent, children:
    [
      {path:'listado', component: ListaJuegoComponent},
      {path:'detalle/:id', component: DetalleJuegoComponent},
      {path:'agregar', component: DetalleJuegoComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingModule { }
