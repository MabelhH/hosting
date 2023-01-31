import { Injectable } from '@angular/core';
import{Auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { tienda } from '../interfaces/interface'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth:Auth, private firestore:Firestore) { }

  registrouser({email ,password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  addProduct(registro:tienda){
    const registroRef = collection(this.firestore, 'tienda');
  return addDoc(registroRef, registro)    
  }

  getFacrmacia():Observable<tienda[]>{
    const registroRef= collection(this.firestore, 'tienda');
    return collectionData(registroRef, {idField:'id'}) as Observable<tienda[]>
  }


  deletedFarmacia(registro:tienda){
     const registroRef = doc(this.firestore, `tienda/${registro.id}`)
     return deleteDoc(registroRef);
   }
  
}
