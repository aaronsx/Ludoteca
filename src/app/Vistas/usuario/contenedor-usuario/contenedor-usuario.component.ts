import { Component } from '@angular/core';
import { FondoService } from 'src/app/Servicios/fondo.service';


@Component({
  selector: 'app-contenedor-usuario',
  templateUrl: './contenedor-usuario.component.html',
  styleUrls: ['./contenedor-usuario.component.css']
})
export class ContenedorUsuarioComponent {

  constructor(private fondoService: FondoService) {}
  ngOnInit(): void {
    // Cambiar el fondo al entrar en el componente de usuario
    this.fondoService.setFondoNuevo('url("assets/imagen/1540540777577.png")');
  }
 
 
}
