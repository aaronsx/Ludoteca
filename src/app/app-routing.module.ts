import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleUsuarioComponent } from './Vistas/usuario/detalle-usuario/detalle-usuario.component';
import { ListaUsuarioComponent } from './Vistas/usuario/lista-usuario/lista-usuario.component';
import { DetalleJuegoComponent } from './Vistas/juego/detalle-juego/detalle-juego.component';
import { ListaJuegoComponent } from './Vistas/juego/lista-juego/lista-juego.component';
import { DetalleAlquilerComponent } from './Vistas/alquiler/detalle-alquiler/detalle-alquiler.component';
import { ListaAlquilerComponent } from './Vistas/alquiler/lista-alquiler/lista-alquiler.component';
import { ContenedorUsuarioComponent } from './Vistas/usuario/contenedor-usuario/contenedor-usuario.component';
import { ContenedorAlquierComponent } from './Vistas/alquiler/contenedor-alquier/contenedor-alquier.component';
import { ContenedorJuegoComponent } from './Vistas/juego/contenedor-juego/contenedor-juego.component';


const routes: Routes = [
  
  {path: 'Alquileres', component: ContenedorAlquierComponent, children:
    [
      {path:'listado', component: ListaAlquilerComponent},
      {path:'detalle/:id', component: DetalleAlquilerComponent},
      {path:'agregar', component: DetalleAlquilerComponent}
    ] 
  },
  {path: 'Juegos', component: ContenedorJuegoComponent, children:
    [
      {path:'listado', component: ListaJuegoComponent},
      {path:'detalle/:id', component: DetalleJuegoComponent},
      {path:'agregar', component: DetalleJuegoComponent}
    ] 
  },
  {path: 'Usuario', component: ContenedorUsuarioComponent, children:
    [
      {path:'listado', component: ListaUsuarioComponent},
      {path:'detalle/:id', component: DetalleUsuarioComponent},
      {path:'agregar', component: DetalleUsuarioComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
