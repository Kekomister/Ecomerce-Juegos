import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { MensajesService } from 'src/app/Services/mensajes.service';
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

  constructor(private router: Router, public users: UsuariosService, private bd: BdJuegosService, private msj : MensajesService) { }

  ngOnInit() {
    this.estadLog = this.users.getEstadoLog();
    this.bd.cantidadItems.subscribe(
      (nuevoValor) => {
        this.carritoCant = nuevoValor;
      }
    )
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
    this.msj.preguntar(
      "Estas seguro de salir?","","Si","No"
    ).then((result) => {
      if (result.isConfirmed) {
        this.msj.success("Se ha salido de su cuenta correctamente!", "Ok");
        this.userPrueba.vaciar();
        this.users.logOut();
        this.estadLog = this.users.getEstadoLog();
        this.paginaCheck();
      } else if (result.isDismissed) {
        
      }
    })
    
  }

  paginaCheck(){
    //console.log(this.router.routerState.snapshot.url);
    if(this.router.routerState.snapshot.url == "/compra"){
      this.router.navigate(["/"]);
    }
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


  abrirCarritoRapido() {
    this.setCarritoRapidoView();
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

  eliminar(index: number, item: any): void{
    this.bd.sacarJuegoCarrito(index, item);
    console.log(item);
  }

  navegar():void{
  this.router.navigate(['/contacto/']);
  }

}
