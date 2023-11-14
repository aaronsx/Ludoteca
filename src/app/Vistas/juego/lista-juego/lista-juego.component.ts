import { Component } from '@angular/core';
import { Juego } from 'src/app/Modelos/mock-juego';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';


@Component({
  selector: 'app-lista-juego',
  templateUrl: './lista-juego.component.html',
  styleUrls: ['./lista-juego.component.css']
})
export class ListaJuegoComponent {
  juegos:Juego[]=[];
  constructor(private fbs:FireBaseService) {
    
  }
  ngOnInit(){
    this.fbs.getFireBase("Juegos")
            .subscribe(res => this.juegos = res);
  }
    
    eliminaJuegos(game:Juego)
    {
      this.fbs.deleteFireBase(game, "Juegos");
    }
  
}

  