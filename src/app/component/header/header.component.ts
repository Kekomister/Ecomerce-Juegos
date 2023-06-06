import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  verModal: boolean = false
  estadLog: boolean = false
  textoBuscar : string = " ";
  userPrueba: User = new User ("usuario" , "usuario@gmail.com" , "usuario")
  
  capturarContrasenia: string | undefined;
  capturarMail: string | undefined;



  buscar():void{
    this.router.navigate(['/producto/',this.textoBuscar]);
    this.textoBuscar = "";
  }

  reset(){
    this.router.navigate(['']);
  }

constructor(private router : Router){}

//funcion para abril modal de log
abrirCerrarModalDeLog():void{
  this.verModal = !this.verModal
}


//funcion de log
loguear():void{ 
  if (this.userPrueba.mail === this.capturarMail && this.userPrueba.contraseña === this.capturarContrasenia) {
    this.abrirCerrarModalDeLog()
    this.estadLog = true
  }else{
    //manejo de mail o contraseña incorrecto
  }
}
}
