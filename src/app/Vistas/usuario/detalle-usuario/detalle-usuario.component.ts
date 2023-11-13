import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';


@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent {
  @Input() usuario: any;
  @Input() index: number = 0;
  

  constructor(private fbs: FireBaseService,
    private route:ActivatedRoute) {
  }

  ngOnInit(){
    if(this.route.snapshot.paramMap.get("id") != null){
      this.usuario.id = this.route.snapshot.paramMap.get("id")!;
      this.fbs.getFireBaseByID('Usuario',this.usuario.id).subscribe(
        (res: any) => this.usuario = res);
    }
  }

  enviarUsuario()
  {
    this.fbs.updateFireBase('Usuario',this.usuario).
    then(()=>console.log("Se guardo correctamente")).
    catch(()=>console.log("No se guardo"));
  }
}
