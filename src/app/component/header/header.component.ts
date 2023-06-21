import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  textoBuscar: string = "";
  userPrueba: User = new User("usuario", "usuario@gmail.com", "usuario");
  estadLog: boolean = false
  capturarContrasenia: string | undefined;
  capturarMail: string | undefined;

  titulosItems: string[] = ["Nombre", "Cantidad", "Precio Total", "Eliminar"];

  carritoRapidoView: boolean = false;
  items: any[] = this.bd.getCarrito();

  carritoCant: number = 0;

  constructor(private router: Router, public users: UsuariosService, private bd: BdJuegosService) { }

  ngOnInit() {
    this.estadLog = this.users.getEstadoLog();
  }

  buscar(): void {
    this.router.navigate(['/producto/', this.textoBuscar]);
    this.textoBuscar = "";
  }

  reset() {
    this.router.navigate(['']);
  }

  abrirCerrarModalDeLog(): void {
    this.users.verModal = !this.users.verModal;
  }

  loguearAfuera(){
    this.userPrueba.vaciar();
    this.users.logOut();
    this.estadLog = this.users.getEstadoLog();
  }

  loguear(): void {
    this.users.Login(this.capturarContrasenia, this.capturarMail)
    if (this.users.getEstadoLog()) {
      this.abrirCerrarModalDeLog()
      this.estadLog = this.users.getEstadoLog()
      this.users.verModal = false;
    } else {
      console.log("error");
    }
  }

  irCompra() {
    this.router.navigate(['/compra']);
  }

  verCarritoRapido() {
    this.carritoCant = this.getCant();
  }

  abrirCarritoRapido() {
    this.setCarritoRapidoView();
    if (this.carritoRapidoView) {
      this.verCarritoRapido();
    }
  }

  setCarritoRapidoView() {
    this.carritoRapidoView = !this.carritoRapidoView;
  }

  pasar() {
    this.users.Login("usuario", "usuario@gmail.com");
    this.abrirCerrarModalDeLog()
    this.estadLog = this.users.getEstadoLog()
    this.users.verModal = false;
  }

  getCant() {
    let cant = 0;
    for (let i = 0; i < this.items.length; i++) {
      cant += this.items[i].cantidad;
    }
    return cant;
  }

  eliminar(index: number, item: any): void{
    this.bd.sacarJuegoCarrito(index, item)
    console.log(item);
    
  }

}
