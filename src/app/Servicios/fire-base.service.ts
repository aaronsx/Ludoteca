import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Juego } from '../Modelos/mock-juego';
import { Usuario } from '../Modelos/mock-usuario';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private fb:Firestore) { }
  
  getFireBase(nombreColeccion: string){
    const collecionRef = collection(this.fb, nombreColeccion);
    return collectionData(collecionRef, {idField: "id"}) as Observable<any[]>;
  }

  getFireBasePorId(nombreColeccion: string, idA:string){
    const collecionRef = doc(this.fb, nombreColeccion+"/"+idA);
    return docData(collecionRef, {idField: "id"}) as Observable<any>;
  }

  setFireBase(objeto: any, nombreColeccion: string){
    const collecionRef = collection(this.fb, nombreColeccion);
    return addDoc(collecionRef, objeto)
      .then(() => console.log("Objeto guardado"))
      .catch((error: any) => console.error(error));
  }

  // Método para hacer el update de un objeto en una coleccion
  updateFireBase(objeto: any, nombreColeccion: string, id: string) {
    const collectionRef = doc(this.fb, nombreColeccion+"/"+id);
    return setDoc(collectionRef, objeto);
  }

  deleteFireBase(objeto: any, nombreColeccion: string){
    const collectionRef = doc(this.fb, nombreColeccion+"/"+objeto.id);
    return deleteDoc(collectionRef);
  }
}
