import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BienvenidoComponent } from './vistas/bienvenido/bienvenido.component';


const routes: Routes = [
  
  {path:"",component:BienvenidoComponent},
  {path:"Usuarios",loadChildren:()=>import("./Vistas/usuario/modulo/usuario.module").then(m=>m.UsuarioModule)},
  {path:"Juegos",loadChildren:()=>import("./Vistas/juego/moduo/juego.module").then(m=>m.JuegoModule)},
  {path:"Alquileres",loadChildren:()=>import("./Vistas/alquiler/modulo/alquiler.module").then(m=>m.AlquilerModule)},
  /*{path: 'Alquileres', component: ContenedorAlquierComponent, children:
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
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
