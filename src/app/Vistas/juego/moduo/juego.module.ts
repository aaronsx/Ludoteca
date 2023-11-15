import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoRoutingModule } from './juego-routing.module';
import { ListaJuegoComponent } from '../lista-juego/lista-juego.component';
import { ContenedorJuegoComponent } from '../contenedor-juego/contenedor-juego.component';
import { DetalleJuegoComponent } from '../detalle-juego/detalle-juego.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaJuegoComponent,
    ContenedorJuegoComponent,
    DetalleJuegoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    JuegoRoutingModule
  ]
})
export class JuegoModule { }
