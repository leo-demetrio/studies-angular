import { Component, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  usuario = {
    email: '',
    password: ''
  } 

  name: string | null | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  login(){
    const { email, password } = this.usuario;
    this.authService.login(email, password);
  }
  loginGoogle(){
    const { email, password } = this.usuario;
    this.authService.loginGoogleService(email, password)
    .then(res => {
      this.router.navigate(['/']);
      this.name = res?.user?.displayName;
    })
  }
}