import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  textoBuscar : string = "";
  userPrueba: User = new User ("usuario" , "usuario@gmail.com" , "usuario")
  estadLog: boolean = false
  capturarContrasenia: string | undefined;
  capturarMail: string | undefined;

  titulosItems : string[] = ["Nombre", "Cantidad", "Precio Total"];
//   items : Array<any> = [
//     {nombre : "",
//     cantidad : 0,
//     precioTotal : 0
// }];

carritoRapidoView : boolean = false;
items : any[] = this.bd.getCarrito();

carritoCant : number = 0;

  constructor(private router : Router, public users : UsuariosService, private bd : BdJuegosService){}

  ngOnInit() {
    this.estadLog = this.users.getEstadoLog();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.verCarritoRapido();
  }

  buscar():void{
    this.router.navigate(['/producto/',this.textoBuscar]);
    this.textoBuscar = "";
  }

  reset(){
    this.router.navigate(['']);
  }

//funcion para abril modal de log
abrirCerrarModalDeLog():void{
  this.users.verModal = !this.users.verModal;
}


//funcion de log
loguear():void{
  this.users.Login(this.capturarContrasenia,this.capturarMail)
  if (this.users.getEstadoLog()) {
  this.abrirCerrarModalDeLog()
  this.estadLog = this.users.getEstadoLog()
  this.users.verModal = false;
 }else{
  console.log("error");
 }
  // if (this.userPrueba.mail === this.capturarMail && this.userPrueba.contraseña === this.capturarContrasenia) {
  //   this.abrirCerrarModalDeLog()
  //   this.estadLog = true
  // }else{
  //   //manejo de mail o contraseña incorrecto
  // }
}

irCompra(){
  this.router.navigate(['/compra']);
}

verCarritoRapido(){
  this.carritoCant = this.bd.getCarritoCant();
}

abrirCarritoRapido(){
  this.setCarritoRapidoView();
  if(this.carritoRapidoView){
    this.verCarritoRapido();
  }
}

setCarritoRapidoView(){
  this.carritoRapidoView = !this.carritoRapidoView;
}

pasar(){
  this.users.Login("usuario", "usuario@gmail.com");
  this.abrirCerrarModalDeLog()
  this.estadLog = this.users.getEstadoLog()
  this.users.verModal = false;
}

}
