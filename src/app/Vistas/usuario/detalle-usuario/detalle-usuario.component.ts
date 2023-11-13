import { NgIfContext } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';


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
    if(this.route.snapshot.paramMap.get("id") != null){
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.fbs.getFireBasePorId('Usuario',this.id).subscribe(
        (res: any) => this.usuario = res);
    }
  }
  enviaDatos(){
    if(this.id != undefined)
      this.modificarUsuario();
    else
      this.agregarUsuario();
  }
  agregarUsuario()
  {
    console.log(this.usuario.foto);
    this.fbs.setFireBase(this.usuario,'Usuario').
    then(()=>console.log("Se añadio correctamente")).
    catch(()=>console.log("No se añadio"));
  }
  modificarUsuario()
  {
    this.fbs.updateFireBase(this.usuario,'Usuario', this.id!).
    then(()=>console.log("Se guardo correctamente")).
    catch(()=>console.log("No se guardo"));
  }
}
