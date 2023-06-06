import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  verModal: boolean = false
  textoBuscar : string = "";
  userPrueba: User = new User ("usuario" , "usuario@gmail.com" , "usuario")
  
  capturarContrasenia: string | undefined;
  capturarMail: string | undefined;



  constructor(private router : Router, private users : UsuariosService){}



  buscar():void{
    this.router.navigate(['/producto/',this.textoBuscar]);
    this.textoBuscar = "";
  }

  reset(){
    this.router.navigate(['']);
  }

//funcion para abril modal de log
abrirCerrarModalDeLog():void{
  this.verModal = !this.verModal
}


//funcion de log
loguear():void{
  if(this.users.Login(this.capturarContrasenia,this.capturarMail)){
    this.abrirCerrarModalDeLog();
  }
  // if (this.userPrueba.mail === this.capturarMail && this.userPrueba.contraseña === this.capturarContrasenia) {
  //   this.abrirCerrarModalDeLog()
  //   this.estadLog = true
  // }else{
  //   //manejo de mail o contraseña incorrecto
  // }
}
}
