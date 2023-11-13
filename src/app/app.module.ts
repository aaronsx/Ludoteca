import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioComponent } from './Vistas/usuario/usuario.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { AlquilerComponent } from './Vistas/alquiler/alquiler.component';
import { MenuComponent } from './Core/menu/menu.component';
import { ContenedorAlquilerComponent } from './Vistas/alquiler/contenedor-alquiler/contenedor-alquiler.component';
import { DetalleAlquilerComponent } from './Vistas/alquiler/detalle-alquiler/detalle-alquiler.component';
import { ListaAlquilerComponent } from './Vistas/alquiler/lista-alquiler/lista-alquiler.component';
import { ListaUsuarioComponent } from './Vistas/usuario/lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './Vistas/usuario/detalle-usuario/detalle-usuario.component';
import { ListaJuegoComponent } from './Vistas/juego/lista-juego/lista-juego.component';
import { DetalleJuegoComponent } from './Vistas/juego/detalle-juego/detalle-juego.component';
import { ContenedorJuegoComponent } from './Vistas/juego/contenedor-juego/contenedor-juego.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    JuegoComponent,
    
    MenuComponent,
    ContenedorAlquilerComponent,
    DetalleAlquilerComponent,
    ListaAlquilerComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    
    DetalleJuegoComponent,
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
