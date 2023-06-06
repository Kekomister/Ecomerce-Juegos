import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  textoBuscar : string = "";
  userPrueba: User = new User ("usuario" , "usuario@gmail.com" , "usuario")
  estadLog: boolean = false
  capturarContrasenia: string | undefined;
  capturarMail: string | undefined;



  constructor(private router : Router, public users : UsuariosService, public carrito : CarritoService){}

  ngOnInit() {
    this.estadLog = this.users.getEstadoLog();
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

}

}
