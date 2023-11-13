import { Component, Input } from '@angular/core';
import { Alquiler } from 'src/app/Modelos/mock-alquiler';

@Component({
  selector: 'app-detalle-alquiler',
  templateUrl: './detalle-alquiler.component.html',
  styleUrls: ['./detalle-alquiler.component.css']
})
export class DetalleAlquilerComponent {
  @Input() alquiler?: Alquiler;
  @Input() index: number = 0;
}
