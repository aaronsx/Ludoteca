import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alquiler } from 'src/app/Modelos/mock-alquiler';
import { Juego } from 'src/app/Modelos/mock-juego';
import { Usuario } from 'src/app/Modelos/mock-usuario';
import { FireBaseService } from 'src/app/Servicios/fire-base.service';

@Component({
  selector: 'app-detalle-alquiler',
  templateUrl: './detalle-alquiler.component.html',
  styleUrls: ['./detalle-alquiler.component.css']
})
export class DetalleAlquilerComponent {
  

  constructor(private route: ActivatedRoute,private fbs:FireBaseService) {
    
  }
  //Pillar usuarios y juegos seleccionado
  usuarioSelect:any ;
  juegoSelect:any ;
  idJuego:string="";
  //Una lita usuario y juegos 
  juegos:Juego[]=[];
  juego:any;
  usuarios:Usuario[]=[];
  usuario:any;
  //creamos un objeto alquiler
  alquiler:Alquiler={ id:"", id_Usuario:"",id_Juego:"", fechaAlquiler:"",fechaDevolucion:""};
  id:string="";
  //Pillamos de la base de datos los juegos y Usuario
  ngOnInit(){
    this.fbs.getFireBase("Juegos")
            .subscribe(res => this.juegos = res);
    this.fbs.getFireBase("Usuario")
            .subscribe(res => this.usuarios = res);
  //Pillamos la url 
  if (this.route.snapshot.paramMap.get("id")) {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.fbs.getFireBasePorId('Alquiler', this.id).subscribe(
      (res: any) => {
        console.log('Alquiler por ID:', res);
        this.alquiler = res;
       
        // Si se encuentra un ID de usuario en el alquiler, selecciona automáticamente el usuario
        if (this.alquiler.id_Usuario) {
          this.usuarioSelect = this.usuarios.find(usuario => usuario.id === this.alquiler.id_Usuario);
        }

        // Si se encuentra un ID de juego en el alquiler, selecciona automáticamente el juego
        if (this.alquiler.id_Juego) {
          this.juegoSelect = this.juegos.find(juego => juego.id === this.alquiler.id_Juego);
        }
      }
    );
  }
  }
  enviaDatos(){
    if(this.id != "")
      this.modificarAlquiler();
    else
      this.agregarAlquiler();
  }
  agregarAlquiler()
  {
    this.alquiler.id_Usuario = this.usuarioSelect.id;
    this.alquiler.id_Juego = this.juegoSelect.id;
    console.log(this.alquiler);
    this.fbs.setFireBase(this.alquiler,'Alquiler').
    then(()=>console.log("Se añadio correctamente")).
    catch(()=>console.log("No se añadio"));
  }
  modificarAlquiler()
  {
    this.alquiler.id_Usuario = this.usuarioSelect.id;
    this.alquiler.id_Juego = this.juegoSelect.id;
    this.fbs.updateFireBase(this.alquiler,'Alquiler', this.id!).
    then(()=>console.log("Se guardo correctamente")).
    catch(()=>console.log("No se guardo"));
  }
  //Metodo para sacar el nombre
 
  // Método para cambiar el estado de clic
  darJuego(juego:Juego):void{
    this.juegoSelect=juego;
  }
  darUsuario(usuario:Usuario):void{
    this.usuarioSelect=usuario;
  }
  quitarJuego():void{
    this.juegoSelect="";
  }
  quitarUsuario():void{
    this.usuarioSelect="";
  }
}
