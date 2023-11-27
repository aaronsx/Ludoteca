import { NgIfContext } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent {

  usuario: Usuario = {nombre: "", apellido: "",foto:"",email:""};
  id: string = "";


  constructor(private fbs: FireBaseService,
    private route:ActivatedRoute) {
  }

  ngOnInit(){
    if(this.route.snapshot.paramMap.get("id")){
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.fbs.getFireBasePorId('Usuario',this.id).subscribe(
        (res: any) => this.usuario = res);
    }
  }
  enviaDatos(){
    if(this.id != "")
      this.modificarUsuario();
    else
      this.agregarUsuario();
  }
  agregarUsuario()
  {
    console.log(this.usuario);
    this.fbs.setFireBase(this.usuario,'Usuario').then(() => Swal.fire({
        title: "Guardado!",
        text: "Usuario ha sido guardado",
        icon: 'success'
      }))
      .catch(()=> Swal.fire({
        title: "Oops...!",
        text: "El usuario no ha sido guardado",
        icon: 'error'
      }));
  
  }
  modificarUsuario()
  {
    this.fbs.updateFireBase(this.usuario,'Usuario', this.id!).then(() => Swal.fire({
      title: "Editado!",
      text: "Usuario ha sido editado",
      icon: 'success'
    }))
    .catch(()=> Swal.fire({
      title: "Oops...!",
      text: "El usuario no ha sido editado",
      icon: 'error'
    }));
  }

  
}


