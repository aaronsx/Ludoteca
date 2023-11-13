import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MenuComponent } from './Core/menu/menu.component';
import { DetalleAlquilerComponent } from './Vistas/alquiler/detalle-alquiler/detalle-alquiler.component';
import { ListaAlquilerComponent } from './Vistas/alquiler/lista-alquiler/lista-alquiler.component';
import { ListaUsuarioComponent } from './Vistas/usuario/lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './Vistas/usuario/detalle-usuario/detalle-usuario.component';
import { ListaJuegoComponent } from './Vistas/juego/lista-juego/lista-juego.component';
import { DetalleJuegoComponent } from './Vistas/juego/detalle-juego/detalle-juego.component';
import { FormsModule } from '@angular/forms';
import { ContenedorUsuarioComponent } from './Vistas/usuario/contenedor-usuario/contenedor-usuario.component';
import { ContenedorAlquierComponent } from './Vistas/alquiler/contenedor-alquier/contenedor-alquier.component';
import { ContenedorJuegoComponent } from './Vistas/juego/contenedor-juego/contenedor-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJuegoComponent,
    MenuComponent,
    DetalleAlquilerComponent,
    ListaAlquilerComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    DetalleJuegoComponent,
    ContenedorUsuarioComponent,
    ContenedorAlquierComponent,
    ContenedorJuegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
