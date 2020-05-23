import { Component } from '@angular/core';

import { LoginUsuario } from 'src/app/models/loginUsuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';



@Component({
  selector:'login',
  templateUrl:'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent{

  login: LoginUsuario = {email: ' ', senha:' '}

  constructor(private usuarioService : UsuarioService, private router: Router){

  }
  onSubmit(){
    console.log(this.login)
  }
}
