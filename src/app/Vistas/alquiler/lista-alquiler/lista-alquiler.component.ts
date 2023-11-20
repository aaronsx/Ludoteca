import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Alquiler } from 'src/app/Modelos/mock-alquiler';
import { Juego } from 'src/app/Modelos/mock-juego';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';

@Component({
  selector: 'app-lista-alquiler',
  templateUrl: './lista-alquiler.component.html',
  styleUrls: ['./lista-alquiler.component.css'],
})
export class ListaAlquilerComponent {
  alquileres: any[] = [];
  juegos: Juego = { titulo: '', genero: '', pegi: 0, company: '', foto: '' };
  usuarios: Usuario = { nombre: '', apellido: '', foto: '', email: '' };
  mostrarTodo: any[] = [];

  constructor(private fbs: FireBaseService) {}
  ngOnInit() {
    this.fbs.getFireBase('Alquiler').subscribe((res) => {
      this.alquileres = res;

      // Para cada alquiler, busca el usuario y el juego correspondientes
      this.alquileres.forEach((alquiler) => {
        this.fbs
          .getFireBasePorId('Usuarios', alquiler.id_Usuario)
          .subscribe((usuario) => {
            alquiler.nombreUsuario = usuario.nombre; // Suponiendo que el objeto Usuario tiene una propiedad 'nombre'
            // Llena el arreglo mostrarTodo con la información actualizada
            this.mostrarTodo = this.alquileres.map((alquiler) => ({
              nombreUsuario: alquiler.nombreUsuario || 'Usuario no encontrado',
            }));
          });

        this.fbs
          .getFireBasePorId('Juegos', alquiler.id_Juego)
          .subscribe((juego) => {
            alquiler.nombreJuego = juego.titulo; // Suponiendo que el objeto Juego tiene una propiedad 'titulo'
            // Llena el arreglo mostrarTodo con la información actualizada
            this.mostrarTodo = this.alquileres.map((alquiler) => ({
              
              nombreJuego: alquiler.nombreJuego || 'Juego no encontrado',
            }));
          });
      });
    });
    // Llena el arreglo mostrarTodo con la información actualizada
    this.mostrarTodo = this.alquileres.map(alquiler => ({
      id: alquiler.id,
    }));
  }

  eliminaJuegos(alquileres: Alquiler) {
    this.fbs.deleteFireBase(alquileres, 'Alquiler');
  }
}
