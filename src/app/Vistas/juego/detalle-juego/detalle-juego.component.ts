import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/Modelos/mock-juego';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent {
  juego: Juego = {titulo: "", genero: "",pegi:0,company:"",foto:""};
  id: string = "";


  constructor(private fbs: FireBaseService,
    private route:ActivatedRoute) {
  }

  ngOnInit(){
    if(this.route.snapshot.paramMap.get("id")){
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.fbs.getFireBasePorId('Juegos',this.id).subscribe(
        (res: any) => this.juego = res);
    }
  }
  enviaDatos(){
    if(this.id != "")
      this.modificarJuego();
    else
      this.agregarJuego();
  }
  agregarJuego()
  {
    console.log(this.juego);
    this.fbs.setFireBase(this.juego,'Juegos').
    then(()=>console.log("Se añadio correctamente")).
    catch(()=>console.log("No se añadio"));
  }
  modificarJuego()
  {
    this.fbs.updateFireBase(this.juego,'Juegos', this.id!).
    then(()=>console.log("Se guardo correctamente")).
    catch(()=>console.log("No se guardo"));
  }
}
