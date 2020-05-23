import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HomeComponent } from '../usuario/home/home.component';
import { LoginComponent} from '../usuario/login/login.component';
import { RegistrarComponent } from '../usuario/registrar/registrar.component';
import { AtivarContaComponent } from '../usuario/ativarConta/ativar-conta.component';
import { UsuarioService } from '../services/usuario.service';

@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    RegistrarComponent,
    AtivarContaComponent
  ],
  imports:[
    FormsModule,
    CommonModule
  ],
  exports:[

  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule{

}
