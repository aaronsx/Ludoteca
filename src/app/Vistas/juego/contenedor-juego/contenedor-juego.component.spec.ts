import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorJuegoComponent } from './contenedor-juego.component';

describe('ContenedorJuegoComponent', () => {
  let component: ContenedorJuegoComponent;
  let fixture: ComponentFixture<ContenedorJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorJuegoComponent]
    });
    fixture = TestBed.createComponent(ContenedorJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
