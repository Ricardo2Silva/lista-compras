import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AtivarConta } from 'src/app/models/ativarConta.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector:'ativar-conta',
  templateUrl:'ativar-conta.component.html',
  styleUrls:['ativar-conta.component.css']
})
export class AtivarContaComponent{

  ativarUsuario: AtivarConta = { email: '',activationCode: ''};

  constructor(private usuarioService : UsuarioService, private router : Router){

  }
  onSubmit(){
    this.usuarioService.ativarUsuario(this.ativarUsuario).subscribe(
      (data) =>{
        console.log(data);
        console.log('usuario ativado com sucesso');
      },
      (error) =>{
        console.log(error);
      }

    );
    this.router.navigate(['/login']);
  }
}
