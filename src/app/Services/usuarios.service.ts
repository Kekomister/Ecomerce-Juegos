import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  userPrueba: User = new User ("Profe Guille" , "admin" , "admin");
  private estadLog: boolean = false;
  public verModal: boolean = false;

  constructor() { }

  public Login(capContra : string | undefined, capMail : string | undefined) {
    if (this.userPrueba.mail === capMail && this.userPrueba.contraseña === capContra) {
      this.estadLog = true;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login exitoso',
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cuenta o contraseña incorrectos!',
      })
    } 
  }

  public logOut(){
    this.estadLog = false;
  }

  public getEstadoLog() : boolean {
    return this.estadLog
  }
 
  
}
