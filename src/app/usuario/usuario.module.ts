import { NgModule } from '@angular/core';


import {HomeComponent} from '../usuario/home/home.component';
import {LoginComponent} from '../usuario/login/login.component';
import {RegistrarComponent} from '../usuario/registrar/registrar.component';

@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports:[

  ],
  exports:[

  ]
})
export class UsuarioModule{

}
