export class User {
   
    nombreUsuario: string | undefined;
    mail: string | undefined;
    contraseña: string | undefined
      
    constructor(
      nombreUser: string,
      mail: string,
      contra: string,
    ) {
      this.nombreUsuario = nombreUser,
      this.mail = mail,
      this.contraseña = contra
  }
}