import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { DetalleComponent } from './page/detalle/detalle.component';
import { VerCompraComponent } from './page/ver-compra/ver-compra.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'producto', component: ProductoComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'detalle/:value', component:DetalleComponent},
  {path:'producto/:value', component:ProductoComponent},
  {path:'compra', component:VerCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
