import { Component, Inject, Renderer2 } from '@angular/core';
import { FondoService } from './Servicios/fondo.service';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private router: Router,
    private fondoService: FondoService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Suscribirse a los eventos de navegación del router
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Obtener el fondo actual del servicio
        const fondoActual = this.fondoService.getFondoActual();
        
        // Aplicar el fondo al <body>
        this.renderer.setStyle(this.document.body, 'background-image', fondoActual);
      }
    });
  }
}
