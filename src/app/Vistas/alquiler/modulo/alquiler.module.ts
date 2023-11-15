import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleAlquilerComponent } from '../detalle-alquiler/detalle-alquiler.component';
import { ListaAlquilerComponent } from '../lista-alquiler/lista-alquiler.component';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { FormsModule } from '@angular/forms';
import { ContenedorAlquierComponent } from '../contenedor-alquier/contenedor-alquier.component';




@NgModule({
  declarations: [
    DetalleAlquilerComponent,
    ListaAlquilerComponent,
    ContenedorAlquierComponent,
  ],
  imports: [
    CommonModule,
    AlquilerRoutingModule,
    FormsModule,
  ]
})
export class AlquilerModule { }
