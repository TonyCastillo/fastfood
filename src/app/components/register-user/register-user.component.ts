import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


export interface UserInterface {
  name: String;
  email: String;
  password: String;
}
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor( private authService: AuthService) {

  }

  private user: UserInterface = {
    name: '',
    email: '',
    password: '',
  };

  ngOnInit( ) {
  }

  /* onRegister(): void{
    this.authService.registerUser();
  } */

}
