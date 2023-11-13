import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegoComponent } from './Vistas/juego/juego.component';
import { AlquilerComponent } from './Vistas/alquiler/alquiler.component';
import { UsuarioComponent } from './Vistas/usuario/usuario.component';

import { DetalleUsuarioComponent } from './Vistas/usuario/detalle-usuario/detalle-usuario.component';
import { ListaUsuarioComponent } from './Vistas/usuario/lista-usuario/lista-usuario.component';
import { DetalleJuegoComponent } from './Vistas/juego/detalle-juego/detalle-juego.component';
import { ListaJuegoComponent } from './Vistas/juego/lista-juego/lista-juego.component';
import { DetalleAlquilerComponent } from './Vistas/alquiler/detalle-alquiler/detalle-alquiler.component';
import { ListaAlquilerComponent } from './Vistas/alquiler/lista-alquiler/lista-alquiler.component';
import { ContenedorAlquilerComponent } from './Vistas/alquiler/contenedor-alquiler/contenedor-alquiler.component';
import { ContenedorJuegoComponent } from './Vistas/juego/contenedor-juego/contenedor-juego.component';
import { ContenedorUsuarioComponent } from './Vistas/usuario/contenedor-usuario/contenedor-usuario.component';




const routes: Routes = [
  
  {path: 'Alquileres', component: AlquilerComponent, children:
    [
      {path:'contenedor', component: ContenedorAlquilerComponent},
      {path:'listado', component: ListaAlquilerComponent},
      {path:'detalle/:id', component: DetalleAlquilerComponent}
    ] 
  },
  {path: 'Juegos', component: JuegoComponent, children:
    [
      {path:'contenedor', component: ContenedorJuegoComponent},
      {path:'listado', component: ListaJuegoComponent},
      {path:'detalle/:id', component: DetalleJuegoComponent}
    ] 
  },
  {path: 'Usuario', component: UsuarioComponent, children:
    [
      {path:'contenedor', component: ContenedorUsuarioComponent},
      {path:'listado', component: ListaUsuarioComponent},
      {path:'detalle/:id', component: DetalleUsuarioComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
