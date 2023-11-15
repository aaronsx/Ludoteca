import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from '../detalle-usuario/detalle-usuario.component';
import { ContenedorUsuarioComponent } from '../contenedor-usuario/contenedor-usuario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    ContenedorUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
