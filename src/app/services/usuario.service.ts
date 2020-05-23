import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.model';
import { AtivarConta } from '../models/ativarConta.model';

@Injectable()
export class UsuarioService{

  urlBase = 'http://localhost:3000';

  constructor(private httpService: HttpClient){

  }
  cadastrarUsuario(usuario: Usuario): Observable<any> {

    return this.httpService.post(`${this.urlBase}/api/autenticacao/registrar `, usuario)
  }
  ativarUsuario(usuario: AtivarConta): Observable<any>{
    return this.httpService.post(`${this.urlBase}/api/autenticacao/ativar `, usuario)
  }

}
