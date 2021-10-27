import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/components/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  showMenu: boolean = false;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(){
    this.authService.showMenuEmiter.subscribe(
      show => this.showMenu = show
    );
  }
}
