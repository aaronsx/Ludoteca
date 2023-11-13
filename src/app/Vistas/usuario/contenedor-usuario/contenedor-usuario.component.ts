import { Component } from '@angular/core';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';

@Component({
  selector: 'app-contenedor-usuario',
  templateUrl: './contenedor-usuario.component.html',
  styleUrls: ['./contenedor-usuario.component.css']
})
export class ContenedorUsuarioComponent {
 // Parámetro donde vamos a guardar una lista con todos los usuarios de la base de datos
 usuarios?: Usuario[];

 constructor(private fbs: FireBaseService) { }

 ngOnInit(){
   this.fbs.getFireBase("Usuario")
     .subscribe(res => this.usuarios = res);
 }
}
