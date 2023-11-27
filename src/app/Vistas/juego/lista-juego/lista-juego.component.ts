import { Component } from '@angular/core';
import { Juego } from 'src/app/Modelos/mock-juego';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-juego',
  templateUrl: './lista-juego.component.html',
  styleUrls: ['./lista-juego.component.css']
})
export class ListaJuegoComponent {
  juegos:Juego[]=[];
  constructor(private fbs:FireBaseService) {
    
  }
  ngOnInit(){
    this.fbs.getFireBase("Juegos")
            .subscribe(res => this.juegos = res);
  }
    
    eliminaJuegos(game:Juego)
    {
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
         this.fbs.deleteFireBase(game, "Juegos")
            .then(() => swalWithBootstrapButtons.fire({
              title: "Eliminado!",
              text: "El juego ha sido eliminado",
              icon: "success"
            }))
            .catch(() => swalWithBootstrapButtons.fire({
              title: "Oops...!",
              text: "El juego no ha sido eliminado",
              icon: "error"
            }));
  
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "El juego no ha sido eliminado",
            icon: "error"
          });
        }
      });
    }
  
}

  