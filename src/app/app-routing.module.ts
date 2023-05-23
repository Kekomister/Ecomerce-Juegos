import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ContactoComponent } from './page/contacto/contacto.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'producto', component: ProductoComponent},
  {path:'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
