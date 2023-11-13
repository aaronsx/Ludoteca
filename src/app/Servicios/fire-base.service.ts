import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Juego } from '../Modelos/mock-juego';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private fb:Firestore) { }
  // muestra todo segun el tipo que le pases (si es Usuario te muestra todos los usuarios)
 getFireBase(tipo:string): Observable <any[]> {
   const objetoDeBaseRef = collection(this.fb,tipo);
   return collectionData(objetoDeBaseRef, { idField: 'id'}) as Observable<any[]>;
 }

 // Crear campos en la base de datos
 setFireBase(objetoDeBase: any,tipo:string) {
   const objetoDeBaseRef = collection(this.fb,tipo);
   return addDoc(objetoDeBaseRef, objetoDeBase);
 }

 // Para completar el CRUD faltan: delete, update y get de un elemento
 deleteFireBase(objetoDeBase: any,tipo:string){
   const objetoDeBaseDocRef = doc(this.fb, `${tipo}/${objetoDeBase.id}`);
   return deleteDoc(objetoDeBaseDocRef);
 }

 getFireBaseByID(id: string,tipo:string) {
   const objetoDeBaseRef = doc(this.fb, `${tipo}/${id}`);
   return docData(objetoDeBaseRef, {idField: 'id'}) as Observable<any>;
 }

 // Forma de hacer las consultas a la base de datos con angular/fire 7
 getFireBaseByOther(campo: string, valor: any,tipo:string){
   const collectionRef = collection(this.fb, tipo);
   const queryRef = query(collectionRef, where(campo, '==', valor));
   return collectionData(queryRef) as Observable<any[]>;
 }

 updateFireBase(objetoDeBase: any,tipo:string) {
   const objetoDeBaseDOcRef = doc(this.fb, `${tipo}/${objetoDeBase.id}`);
   return setDoc(objetoDeBaseDOcRef, objetoDeBase);
 }

}
