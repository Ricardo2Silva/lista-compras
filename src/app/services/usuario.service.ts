import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.model';
import { AtivarConta } from '../models/ativarConta.model';
import { LoginUsuario } from '../models/loginUsuario.model';

@Injectable()
export class UsuarioService{

  readonly urlBase = 'http://localhost:3000';

  constructor(private httpService: HttpClient){

  }
  cadastrarUsuario(usuario: Usuario): Observable<any> {

    return this.httpService.post(`${this.urlBase}/api/autenticacao/registrar `, usuario)
  }

  ativarUsuario(codigo: AtivarConta): Observable<any>{
    return this.httpService.post(`${this.urlBase}/api/autenticacao/ativar `, codigo)
  }

  logarUsuario(usuario:LoginUsuario):Observable<any>{
    return this.httpService.post(`${this.urlBase}/api/autenticacao/login `, usuario)
  }

}
