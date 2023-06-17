import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import { Juego } from 'src/app/models/juego.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  textoBuscar: string = "";

  // variable que guarda todos los juegos
  jElegidos: Juego[] = [];

  // variable que guarda todas las consolas
  consolas: string[] = [];

  // variable que guarda todos los años
  anios: number[] = [];

  // variable que guarda los rangos de precio
  precios: string[] = ["1000 - 2000", "2000 - 3000", "3000 - 4000", "4000 - 5000", "5000 - 6000"];

  // variable que guarda todos los generos
  generos: string[] = [];

  recibirJuegos() {
    this.jElegidos = this.bd.getJuegos();
    for (let i = 0; i < this.jElegidos.length; i++) {
      this.chequearJuego(this.jElegidos[i]);
    }
    if (this.textoBuscar != "") {
      this.llenarJuegosElegidos("busqueda", this.textoBuscar);
    }
  }

  chequearJuego(j: Juego) {
    this.checkConsola(j.consolas);
    this.checkGenero(j.genero);
    this.checkAnio(j.anioRelease);
  }

  checkConsola(cslas: string[]) {

    let yaEsta = false;

    for (let i = 0; i < cslas.length; i++) {
      yaEsta = false;
      for (let j = 0; j < this.consolas.length && !yaEsta; j++) {
        if (this.consolas[j] == cslas[i]) {
          yaEsta = true;
        }
      }
      if (!yaEsta) {
        this.consolas.push(cslas[i]);
      }
    }
  }

  checkAnio(anio: number) {

    let yaEsta = false;

    for (let i = 0; i < this.anios.length && !yaEsta; i++) {
      if (this.anios[i] == anio) {
        yaEsta = true;
      }
    }
    if (!yaEsta) {
      this.anios.push(anio);
    }
  }

  checkGenero(gen: string[]) {

    let yaEsta = false;

    for (let i = 0; i < gen.length; i++) {
      yaEsta = false;
      for (let j = 0; j < this.generos.length && !yaEsta; j++) {
        if (this.generos[j] == gen[i]) {
          yaEsta = true;
        }
      }
      if (!yaEsta) {
        this.generos.push(gen[i]);
      }
    }
  }

  llenarJuegosElegidos(caso: string, opcion: any) {

    this.jElegidos = [];

    caso = caso.toLocaleLowerCase();

    this.jElegidos = this.bd.filtrarJuegosPor(caso,opcion);
  }

  reset() {
    this.bd.restaurarJuegos();
    this.jElegidos = this.bd.getJuegos();
    console.log(this.jElegidos);
    this.router.navigate(['/producto']);
  }


  textoEnBuscar() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('value');
      if (id != null) {
        this.textoBuscar = String(id);
        this.llenarJuegosElegidos("busqueda", this.textoBuscar);
      }
    });
  }

  constructor(private router: Router, private route: ActivatedRoute, private bd : BdJuegosService) { }

  ngOnInit() {
    this.recibirJuegos();
    this.textoEnBuscar();
  }

  ngOnDestroy() {
    this.textoBuscar = "";
    this.jElegidos = [];
    this.bd.restaurarJuegos();
  }

}
