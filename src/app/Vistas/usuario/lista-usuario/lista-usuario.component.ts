import { Component } from '@angular/core';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {
// Propiedad para guardar los partidos
usuarios: Usuario[] = [];

constructor(private fbs: FireBaseService) {
}
  ngOnInit(){
    this.fbs.getFireBase("Usuario")
            .subscribe(res => this.usuarios = res);
  }
  eliminaUsuario(usuario: Usuario){
    this.fbs.deleteFireBase(usuario, "Usuario");
  }
}
