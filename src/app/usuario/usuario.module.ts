import { NgModule } from '@angular/core';


import {HomeComponent} from '../usuario/home/home.component';
import {LoginComponent} from '../usuario/login/login.component';
import {RegistrarComponent} from '../usuario/registrar/registrar.component';
import {AtivarContaComponent} from '../usuario/ativarConta/ativar-conta.component';

@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    RegistrarComponent,
    AtivarContaComponent
  ],
  imports:[

  ],
  exports:[

  ]
})
export class UsuarioModule{

}
