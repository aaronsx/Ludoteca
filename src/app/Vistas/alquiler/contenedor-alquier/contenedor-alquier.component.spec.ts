import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAlquierComponent } from './contenedor-alquier.component';

describe('ContenedorAlquierComponent', () => {
  let component: ContenedorAlquierComponent;
  let fixture: ComponentFixture<ContenedorAlquierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorAlquierComponent]
    });
    fixture = TestBed.createComponent(ContenedorAlquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
