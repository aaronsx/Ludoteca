import { Component } from '@angular/core';
import { catchError, forkJoin, switchMap, throwError } from 'rxjs';
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
  mostrarTodoPersona: any[] = [];
  mostrarTodoJuego: any[] = [];
  
  constructor(private fbs: FireBaseService) {}
  ngOnInit() {
    this.fbs.getFireBase('Alquiler').subscribe((res) => {
      this.alquileres = res;

      // Para cada alquiler, busca el usuario y el juego correspondientes
      this.alquileres.forEach((alquiler) => {
        this.fbs
          .getFireBasePorId('Usuario', alquiler.id_Usuario)
          .subscribe((usuario) => {
            alquiler.nombreUsuario = usuario.nombre +" "+usuario.apellido; // Suponiendo que el objeto Usuario tiene una propiedad 'nombre'
            
            // Llena el arreglo mostrarTodo con la información actualizada
            this.mostrarTodoJuego = this.alquileres.map((alquiler) => ({
              id: alquiler.id,
              nombreUsuario: alquiler.nombreUsuario || 'Usuario no encontrado',
              nombreJuego: alquiler.nombreJuego || 'Juego no encontrado',
            }));
           
          });

        this.fbs
          .getFireBasePorId('Juegos', alquiler.id_Juego)
          .subscribe((juego) => {
            alquiler.nombreJuego = juego.titulo; // Suponiendo que el objeto Juego tiene una propiedad 'titulo'
           // Llena el arreglo mostrarTodo con la información actualizada
          this.mostrarTodoJuego = this.alquileres.map((alquiler) => ({
           id: alquiler.id,
            nombreUsuario: alquiler.nombreUsuario || 'Usuario no encontrado',
            nombreJuego: alquiler.nombreJuego || 'Juego no encontrado',
      }));
            
          });
         
      });
    });
  }

  eliminaJuegos(alquileres: Alquiler) {
    this.fbs.deleteFireBase(alquileres, 'Alquiler');
  }
}
