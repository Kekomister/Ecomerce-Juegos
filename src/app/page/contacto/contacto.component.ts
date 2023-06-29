import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  name: string = '';
  email: string = '';
  number: string = '';
  mensaje: string = '';

  ngOnInit(): void {}

  enviar(): void {
    console.log(this.name.length);
    
    if (
      this.name.length > 0 &&
      this.email.length > 0 &&
      this.number.length > 0 &&
      this.mensaje.length > 0
    ) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.name = '';
      this.email = '';
      this.number = '';
      this.mensaje = '';
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algun campo quedo incompleto!',
      })
    }
  }
}
