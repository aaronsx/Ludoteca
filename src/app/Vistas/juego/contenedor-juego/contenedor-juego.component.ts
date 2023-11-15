import { Component } from '@angular/core';
import { FondoService } from 'src/app/Servicios/fondo.service';

@Component({
  selector: 'app-contenedor-juego',
  templateUrl: './contenedor-juego.component.html',
  styleUrls: ['./contenedor-juego.component.css']
})
export class ContenedorJuegoComponent {
  constructor(private fondoService: FondoService) {}
  ngOnInit(): void {
    // Cambiar el fondo al entrar en el componente de usuario
    this.fondoService.setFondoNuevo('url("assets/imagen/ilustracion-3d-fondo-liga-deportes-electronicos.jpg")');
  }
}
