import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Juego } from 'src/app/models/juego.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  // nombre del juego que quiero ver los detalles
  nombre: string | undefined;

  juego: Juego | undefined;

  constructor(private route: ActivatedRoute, private router : Router, private users : UsuariosService, private bd : BdJuegosService) { };

  ngOnInit() {
    // para recibir nombre al moverse de pagina hacia esta (detalle)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('value');
      this.nombre = String(id);
    })
  }

  reciboJuegos(js : Juego[]){
    for(let i = 0; i < js.length; i++){
      if(js[i].nombre == this.nombre){
        this.juego = js[i];
      }
    }
  }

  corroborar(): boolean {
    let logeado = false;
    if (this.users.getEstadoLog()) {
      return true;
    }
    return logeado;
  }

  agregar(j: Juego) {
    this.bd.agregarJuegoCarrito(j);
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
