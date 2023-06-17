import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private userPrueba: User = new User ("usuario" , "usuario@gmail.com" , "usuario");
  private estadLog: boolean = false;
  public verModal: boolean = false;

  constructor() { }

  public Login(capContra : string | undefined, capMail : string | undefined) {
    if (this.userPrueba.mail === capMail && this.userPrueba.contraseña === capContra) {
      this.estadLog = true;
    }else{
      //manejo de mail o contraseña incorrecto
    } 
  }

  public logOut(){
    this.estadLog = false;
  }

  public getEstadoLog() : boolean {
    return this.estadLog
  }
 
  
}
