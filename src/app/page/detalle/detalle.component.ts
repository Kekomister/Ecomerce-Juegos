import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Juego } from 'src/app/models/juego.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {

  nombre: string | undefined;
  juego: Juego | undefined;

  jParecidos: Juego[] = [];

  paginatorInicio: number = 0;
  paginatorFin: number = 3;

  constructor(private route: ActivatedRoute, private router: Router, private users: UsuariosService, private bd: BdJuegosService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('value');
      this.nombre = String(id);
    })
    this.reciboJuegos();
    this.llenarJuegosParecidos();
  }

  ngOnDestroy(): void {
    this.bd.restaurarJuegos();
  }

  reciboJuegos() {
    let js = this.bd.getJuegos();
    for (let i = 0; i < js.length; i++) {
      if (js[i].nombre == this.nombre) {
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

  cambiar(aCambiar: string) {
    this.ocultar();
    document.getElementById(aCambiar).hidden = false;
    document.getElementById((aCambiar + "Link")).className = "nav-link active";
  }

  llenarJuegosParecidos() {

    this.jParecidos = [];

    for (let i = 0; i < this.juego.genero.length; i++) {
      let js = (this.bd.filtrarJuegosPor("genero", this.juego.genero[i]));
      this.llenarTandaDeJuegos(js);
    }
  }

  setPaginator(page: number) {
    this.paginatorInicio = (3 * page) - 3;
    this.paginatorFin = 3 * page;
    this.paginaActiva(page);
  }

  moverPaginator(direccion: number) {
    let mover = false;
    if (direccion == 3 && this.paginatorFin < this.jParecidos.length) {
      mover = true;
    } else {
      if (direccion == -3 && this.paginatorInicio > 0) {
        mover = true;
      }
    }
    
    if(mover){
      this.paginatorInicio = this.paginatorInicio + direccion;
      this.paginatorFin = this.paginatorFin + direccion;
      this.paginaActiva((this.paginatorInicio / 3)+1);
    }
  }

  paginaActiva(page : number){
    for(let i = 0; i < (this.jParecidos.length / 3);i++){
      document.getElementById("page "+ (i+1)).className = "page-link";
    }
    document.getElementById("page "+ page).className = "page-link active";
  }

  private llenarTandaDeJuegos(js: Juego[]) {
    for (let i = 0; i < js.length; i++) {
      if (js[i] != this.juego) {
        if (!this.chequearJuego(js[i])) {
          this.jParecidos.push(js[i]);
        }
      }
    }
  }

  private chequearJuego(juego: Juego): boolean {
    let yaEsta = false;
    for (let i = 0; i < this.jParecidos.length && !yaEsta; i++) {
      if (this.jParecidos[i] == juego) {
        yaEsta = true;
      }
    }
    return yaEsta;
  }

  private ocultar() {
    document.getElementById('descripcionTab').hidden = true;
    document.getElementById('datosTecnicosTab').hidden = true;
    document.getElementById('MismoGeneroTab').hidden = true;
    document.getElementById('descripcionTabLink').className = "nav-link";
    document.getElementById('datosTecnicosTabLink').className = "nav-link";
    document.getElementById('MismoGeneroTabLink').className = "nav-link";
  }
}
