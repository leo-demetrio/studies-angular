import { Component } from '@angular/core';
import { AuthService } from './auth.service';

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
  name: string | null | undefined = "leo";

  constructor(
    private authService: AuthService
  ){}
  
  login(){
    const { email, password } = this.usuario;
    this.authService.loginService(email, password)
    .then(res => {
      console.log("Login efetuado",res)
      console.log(res.user.email)
      this.name = res?.user?.email;
    });
  }
  loginGoogle(){
    const { email, password } = this.usuario;
    this.authService.loginGoogleService(email, password)
    .then(res => {
      console.log("Login efetuado",res);
      this.name = res?.user?.displayName;
    })
  }
}