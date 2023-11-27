import { Component } from '@angular/core';
import { catchError, forkJoin, switchMap, throwError } from 'rxjs';
import { Alquiler } from 'src/app/Modelos/mock-alquiler';
import { Juego } from 'src/app/Modelos/mock-juego';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-alquiler',
  templateUrl: './lista-alquiler.component.html',
  styleUrls: ['./lista-alquiler.component.css'],
})
export class ListaAlquilerComponent {
  alquileres: any[] = [];
  juegos: Juego = { titulo: '', genero: '', pegi: 0, company: '', foto: '' };
  usuarios: Usuario = { nombre: '', apellido: '', foto: '', email: '' };
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
              fechaAlquiler:alquiler.fechaAlquiler,
              fechaDevolucion:alquiler.fechaDevolucion,
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
            fechaAlquiler:alquiler.fechaAlquiler,
            fechaDevolucion:alquiler.fechaDevolucion,
      }));
            
          });
         
      });
    });
  }

  eliminaAlquiler(alquileres: Alquiler) {
    if (this.mostrarTodoJuego.length > 0) {
      const primerElemento = this.mostrarTodoJuego[0];
      this.fbs.getFireBasePorId('Alquiler', primerElemento.id).subscribe((alquiler) => {
        // Hacer algo con el objeto 'alquiler' obtenido
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "¿Estás seguro?",
          text: "¡No se podrán revertir los cambios!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.fbs.deleteFireBase(alquiler, 'Alquiler')
              .then(() => swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "El alquiler ha sido eliminado",
                icon: "success"
              }))
              .catch(() => swalWithBootstrapButtons.fire({
                title: "Oops...!",
                text: "El alquiler no ha sido eliminado",
                icon: "error"
              }));
    
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelado",
              text: "El alquiler no ha sido eliminado",
              icon: "error"
            });
          }
        });
      });
    } else {
      console.error('El array this.mostrarTodoJuego está vacío.');
    }
    
  }
}
