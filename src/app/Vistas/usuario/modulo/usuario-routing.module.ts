import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorUsuarioComponent } from '../contenedor-usuario/contenedor-usuario.component';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from '../detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  {
    path: '', component: ContenedorUsuarioComponent, children:
    [
      {path:'listado', component: ListaUsuarioComponent},
      {path:'detalle/:id', component: DetalleUsuarioComponent},
      {path:'agregar', component: DetalleUsuarioComponent}
    ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
