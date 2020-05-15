import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './usuario/home/home.component';
import {LoginComponent}from './usuario/login/login.component';
import {RegistrarComponent} from './usuario/registrar/registrar.component'

const routes: Routes = [
  {path:' ',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
