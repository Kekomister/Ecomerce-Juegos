import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { HeaderComponent } from './component/header/header.component';
import { JuegosComponent } from './component/juegos/juegos.component';
import { DetalleComponent } from './page/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoComponent,
    ContactoComponent,
    HeaderComponent,
    JuegosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
