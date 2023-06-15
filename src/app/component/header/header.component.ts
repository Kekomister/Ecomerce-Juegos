import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';
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

itemsNom : string[] = [];
itemsNum : number[] = [];
itemsPrecio : number[] = [];
carritoRapidoView : boolean = false;

  constructor(private router : Router, public users : UsuariosService, public carrito : CarritoService){}

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
  this.itemsNom = [];
  this.itemsNum = [];
  this.itemsPrecio = [];

  let c = this.carrito.getCarrito();
  
  for(let i = 0; i < c.length; i++){
    let yaEsta = false;
    for(let j = 0; j < this.itemsNom.length; j++){
      if(c[i].nombre == this.itemsNom[j]){
        this.itemsNum[j]++;
        this.itemsPrecio[j] += Number(c[i].precio);
        yaEsta = true;
      }
    }
    if(!yaEsta){
      this.itemsNom.push(c[i].nombre);
      this.itemsNum.push(1);
      this.itemsPrecio.push(Number(c[i].precio));
    }
  }
  console.log(this.itemsNom);
  
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
