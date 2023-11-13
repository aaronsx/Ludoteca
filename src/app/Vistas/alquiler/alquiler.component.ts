import { Component } from '@angular/core';
import { Alquiler } from 'src/app/Modelos/mock-alquiler';
import { AlquilerService } from 'src/app/Servicios/alquiler.service';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {
  alquileres:Alquiler[]=[];
  constructor(private fba:AlquilerService) {
    
  }
  ngOnInit(){
    this.fba.getAlquileres().subscribe( res => {
      this.alquileres = res;
      console.log(this.alquileres);
    });
  }
}
