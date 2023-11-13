import { Component, Input } from '@angular/core';
import { Juego } from 'src/app/Modelos/mock-juego';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent {
  @Input() juego?: Juego;
  @Input() index: number = 0;
}
