import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { HeaderComponent } from './component/header/header.component';
import { JuegosComponent } from './components/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoComponent,
    ContactoComponent,
    HeaderComponent,
    JuegosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
