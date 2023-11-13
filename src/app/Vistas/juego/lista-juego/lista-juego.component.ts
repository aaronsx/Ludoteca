import { Component } from '@angular/core';
import { Juego } from 'src/app/Modelos/mock-juego';
import { JuegosService } from 'src/app/Servicios/juegos.service';

@Component({
  selector: 'app-lista-juego',
  templateUrl: './lista-juego.component.html',
  styleUrls: ['./lista-juego.component.css']
})
export class ListaJuegoComponent {
  juegos:Juego[]=[];
  constructor(private fbj:JuegosService) {
    
  }
  ngOnInit(){
    this.fbj.getJuegos().subscribe( res => {
      this.juegos = res;
      console.log(this.juegos);
    });
  }
}
