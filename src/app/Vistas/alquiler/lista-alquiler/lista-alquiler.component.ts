import { Component } from '@angular/core';
import { Alquiler } from 'src/app/Modelos/mock-alquiler';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';

@Component({
  selector: 'app-lista-alquiler',
  templateUrl: './lista-alquiler.component.html',
  styleUrls: ['./lista-alquiler.component.css']
})
export class ListaAlquilerComponent {
  alquileres:Alquiler[]=[];
  constructor(private fbs:FireBaseService) {
    
  }
  ngOnInit(){
    this.fbs.getFireBase("Alquiler")
            .subscribe(res => this.alquileres = res);
  }
    
    eliminaJuegos(alquileres:Alquiler)
    {
      this.fbs.deleteFireBase(alquileres, "Alquiler");
    }
}
