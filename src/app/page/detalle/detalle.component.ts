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
export class DetalleComponent implements OnInit {

  nombre: string | undefined;
  juego: Juego | undefined;

  jParecidos: Juego[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private users: UsuariosService, private bd: BdJuegosService) { };

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('value');
      this.nombre = String(id);
    })
    this.reciboJuegos();
    this.llenarJuegosParecidos();
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
    document.getElementById((aCambiar+"Link")).className = "nav-link active";
  }

  llenarJuegosParecidos() {

    this.jParecidos = [];

    for(let i = 0; i < this.juego.genero.length; i++){
      let js = (this.bd.filtrarJuegosPor("genero",this.juego.genero[i]));
      this.llenarTandaDeJuegos(js);
    }
  }

  private llenarTandaDeJuegos(js : Juego[]){
    for(let i = 0; i < js.length; i++){
      if(js[i] != this.juego){
        if(!this.chequearJuego(js[i])){
          this.jParecidos.push(js[i]);
        }
      }
    }
  }

  private chequearJuego(juego : Juego) : boolean{
    let yaEsta = false;
    for(let i = 0; i < this.jParecidos.length && !yaEsta; i++){
      if(this.jParecidos[i] == juego){
        yaEsta = true;
      }
    }
    return yaEsta;
  }

  private ocultar(){
    document.getElementById('descripcionTab').hidden = true;
    document.getElementById('datosTecnicosTab').hidden = true;
    document.getElementById('MismoGeneroTab').hidden = true;
    document.getElementById('descripcionTabLink').className = "nav-link";
    document.getElementById('datosTecnicosTabLink').className = "nav-link";
    document.getElementById('MismoGeneroTabLink').className = "nav-link";
  }
}
