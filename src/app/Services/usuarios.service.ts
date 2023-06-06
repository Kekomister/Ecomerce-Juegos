import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  userPrueba: User = new User ("usuario" , "usuario@gmail.com" , "usuario")
  estadLog: boolean = false

  constructor() { }

  Login(capContra : string | undefined, capMail : string | undefined) : boolean{
    if (this.userPrueba.mail === capMail && this.userPrueba.contraseña === capContra) {
      this.estadLog = true;
    }else{
      //manejo de mail o contraseña incorrecto
    }
    return this.estadLog;
  }
}
