import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MenuComponent } from './Vistas/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './vistas/bienvenido/bienvenido.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BienvenidoComponent
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
