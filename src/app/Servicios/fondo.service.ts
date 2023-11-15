import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FondoService {

  private fondoActual: string = ''; // Puedes inicializar con el fondo predeterminado

  getFondoActual(): string {
    return this.fondoActual;
  }

  setFondoNuevo(fondo: string): void {
    this.fondoActual = fondo;
  }
}
