import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector:'registrar',
  templateUrl:'registrar.component.html',
  styleUrls:['registrar.component.css']
})

export class RegistrarComponent{

  usuario: Usuario = {nome: ' ', email: ' ', senha :' '};

  constructor( private usuarioService: UsuarioService, private router: Router){

  }
  onSubmit(){

    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(
      (data) =>{
        console.log(data);
        console.log('usuario cadastrado com sucesso');
      },
      (error) =>{
        console.log(error);
      }
    );
    this.router.navigate(['/ativar-conta'])
  }

}
