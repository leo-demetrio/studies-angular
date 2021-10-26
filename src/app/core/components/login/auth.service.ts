import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  async loginService(email: string, password: string) {
    try {
      return await this.fireAuth.signInWithEmailAndPassword(email, password);
    }catch(e){
      console.log("Erro no service", e);
      return null;
    }
  }
  async loginGoogleService(email: string, password: string) {
    try {
      return await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(e){
      console.log("Erro no service", e);
      return null;
    }
  }
}
