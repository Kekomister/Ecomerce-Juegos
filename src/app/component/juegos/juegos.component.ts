import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Juego } from 'src/app/models/juego.model';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css'],
})
export class JuegosComponent implements OnInit{
  @Input() indiceRecorrido: number = 6;

  @Input() juegosElegidos: Juego[] = [];

  constructor(private router: Router, private users: UsuariosService, private bd : BdJuegosService) { }

  ngOnInit() {
    
  }


  verDetalle(j: Juego) {
    this.router.navigate(['/detalle', j.nombre]);
  }

  mostrar(juego: any) {
    console.log(juego.nombre);
  }

  corroborar(): boolean {
    let logeado = false;
    if (this.users.getEstadoLog()) {
      return true;
    }
    return logeado;
  }

  agregar(j: Juego) {
    if (this.corroborar()) {
      this.bd.agregarJuegoCarrito(j);
    } else {
      this.users.verModal = true;
    }
  }

  comprar(j: Juego) {
    if (this.corroborar()) {
      this.agregar(j);
      this.router.navigate(['/compra']);
    } else {
      this.users.verModal = true;
    }
  }
}
