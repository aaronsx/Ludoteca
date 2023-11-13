import { Component } from '@angular/core';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuarios:Usuario[]=[];
  constructor(private fbs:FireBaseService) {
    
  }
  ngOnInit(){
    this.fbs.getFireBase('Usuario').subscribe( res => {
      this.usuarios = res;
      //console.log(this.usuarios);
    });
  }
}
