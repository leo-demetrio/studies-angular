import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from '@firebase/app-compat';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showMenuEmiter = new EventEmitter<boolean>();

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  async loginService(email: string, password: string) {
    try {
      return await this.fireAuth.signInWithEmailAndPassword(email, password);
    }catch(e){
      return null;
    }
  }
  login(email: string, password: string){    
    this.loginService(email, password)
    .then(res => {
      if(res === null){
        return this.router.navigate(['/login']);
      }
      this.showMenuEmiter.emit(true);
      this.router.navigate(['/']);  
      return null;      
    })
    .catch(err => {
      this.router.navigate(['/login']); 
    });
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
