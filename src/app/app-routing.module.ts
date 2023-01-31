import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'registro',component:RegistroComponent},
  {path:'lista',component:ListaComponent},
  {path:'',redirectTo:'/registro',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
