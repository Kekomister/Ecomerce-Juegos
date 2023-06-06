import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/models/juego.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  elegido: boolean = false;
  textoBuscar: string = "";

  // variable que guarda todos los juegos
  juegos: Juego[] = [];

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
  // arreglo que voy a usar para funcion de filtro
  //juegoRecibido: any[] = [];

  recibirJuegos(js: Juego[]) {
    //console.log(this.router.navigated);
    this.juegos = js;
    for (let i = 0; i < this.juegos.length; i++) {
      //this.juegoRecibido.push(this.juegos)
      this.chequearJuego(this.juegos[i]);
    }
    if (this.textoBuscar != "") {
      this.llenarJuegosElegidos("busqueda", this.textoBuscar);
    }
  }

  // funcion para agregar juegos al array juegos (lo llamo en el OnInit)
  chequearJuego(j: Juego) {
    // checkeo las consolas de ese juego
    this.checkConsola(j.consolas);
    // checkeo los generos de ese juego
    this.checkGenero(j.genero);
    // checkeo el año de ese juego
    this.checkAnio(j.anioRelease);
  }

  checkConsola(cslas: string[]) {
    // creo una variable que me diga si esa consola esta
    let yaEsta = false;
    // entro en array de consolas del juego especifico que estoy chequeando
    for (let i = 0; i < cslas.length; i++) {
      // cada vez que voy a chechear una consola del juego, lo pongo en false porque no se si esta en el array general
      yaEsta = false;
      // entro en array de consolas general/global
      for (let j = 0; j < this.consolas.length && !yaEsta; j++) {
        // si esa consola ya existe, se vuelve verdadera la bandera
        if (this.consolas[j] == cslas[i]) {
          yaEsta = true;
        }
      }
      // si paso todo sin ser verdad, se agrega a las consolas generales/globales
      if (!yaEsta) {
        this.consolas.push(cslas[i]);
      }
    }
  }

  checkAnio(anio: number) {
    // creo una variable que me diga si ese año esta
    let yaEsta = false;
    // entro en array de años general/global
    for (let i = 0; i < this.anios.length && !yaEsta; i++) {
      // si ese año ya existe, se vuelve verdadera la bandera
      if (this.anios[i] == anio) {
        yaEsta = true;
      }
    }
    // si paso todo sin ser verdad, se agrega a los años generales/globales
    if (!yaEsta) {
      this.anios.push(anio);
    }
  }

  checkGenero(gen: string[]) {
    // creo una variable que me diga si ese genero esta
    let yaEsta = false;
    // entro en array de generos del juego especifico que estoy chequeando
    for (let i = 0; i < gen.length; i++) {
      // cada vez que voy a chechear un genero del juego, lo pongo en false porque no se si esta en el array general
      yaEsta = false;
      // entro en array de generos general/global
      for (let j = 0; j < this.generos.length && !yaEsta; j++) {
        // si ese genero ya existe, se vuelve verdadera la bandera
        if (this.generos[j] == gen[i]) {
          yaEsta = true;
        }
      }
      // si paso todo sin ser verdad, se agrega a los generos generales/globales
      if (!yaEsta) {
        this.generos.push(gen[i]);
      }
    }
  }

  llenarJuegosElegidos(caso: string, opcion: any) {

    // esto hace que la pagina se vea para casos especificos (consola,año,etc)
    this.elegido = true;
    // vacio la variable antes de usarla para que si ya la habia usado, no tenga juegos de antemano
    this.jElegidos = [];

    caso = caso.toLocaleLowerCase();

    switch (caso) {

      case "genero":
        // entro en el array de juegos global
        for (let i = 0; i < this.juegos.length; i++) {
          // entro en el array de generos del juego en el que estoy ahora mismo
          for (let j = 0; j < this.juegos[i].genero.length; j++) {
            // si ese juego que estoy ahora, tiene el genero que busco, lo agrego a los ELEGIDOS
            if (this.juegos[i].genero[j] == opcion) {
              this.jElegidos.push(this.juegos[i]);
            }
          }
        }
        break;

      case "consola":
        // entro en el array de juegos global
        for (let i = 0; i < this.juegos.length; i++) {
          // entro en el array de consolas del juego en el que estoy ahora mismo
          for (let j = 0; j < this.juegos[i].consolas.length; j++) {
            // si ese juego, en la consola que estoy ahora, es la que busco, lo agrego a los ELEGIDOS
            if (this.juegos[i].consolas[j] == opcion) {
              this.jElegidos.push(this.juegos[i]);
            }
          }
        }
        break;

      case "precio":

        // el precio que estoy buscando es de [*** a ***], entonces necesito separarlo en inicio y fin
        let inicio = this.rangoInicio(opcion);
        let fin = this.rangoFin(opcion);

        // entro en el array de juegos global
        for (let i = 0; i < this.juegos.length; i++) {
          // paso mi precio a numero (no me acuerdo porque lo hize texto, pero lo necesitaba)
          let precio = Number(this.juegos[i].precio);
          // si ese juego que estoy ahora, tiene un precio dentro de lo que busco, lo agrego a los ELEGIDOS
          if (precio >= inicio && precio <= fin) {
            this.jElegidos.push(this.juegos[i]);
          }
        }
        break;

      case "anio":

        // entro en el array de juegos global
        for (let i = 0; i < this.juegos.length; i++) {
          // si ese juego que estoy ahora, tiene el año que busco, lo agrego a los ELEGIDOS
          if (this.juegos[i].anioRelease == opcion) {
            this.jElegidos.push(this.juegos[i]);
          }
        }
        break;

      case "requisito":

        // entro en el array de juegos global
        for (let i = 0; i < this.juegos.length; i++) {
          // si ese juego que estoy ahora, tiene los requisitos que busco, lo agrego a los ELEGIDOS
          if (this.juegos[i].requisitos?.toLocaleLowerCase() == opcion) {
            this.jElegidos.push(this.juegos[i]);
          }
        }
        break;

      case "busqueda":
        for (let i = 0; i < this.juegos.length; i++) {
          // busco los juegos que dentro de su nombre tengan el texto de la variable 'value'
          // los paso a lowercase para que no haya problemas de mayusculas
          if (this.juegos[i].nombre?.toLowerCase().includes(opcion.toLowerCase())) {
            this.jElegidos.push(this.juegos[i]);
          }
        }
        break;

      default:
        alert("NO DEBERIA ENTRAR AQUI");
        break;
    }
  }

  rangoInicio(p: string): number {
    let n = 0;
    for (let i = 0; i < this.precios.length; i++) {
      if (this.precios[i] == p) {
        // el formato que lo tengo en el array:
        // [1000 - 2000]  EL 10 ME QUEDo FEO, PERO LO MOVI PARA QUE SEA MAS CLARO
        // [0123456789 10]
        let text = this.precios[i].substring(0, 5); // el segundo numero no es incluido (5)
        n = Number(text);
      }
    }
    return n;
  }

  rangoFin(p: string): number {
    let n = 0;
    for (let i = 0; i < this.precios.length; i++) {
      if (this.precios[i] == p) {
        // el formato que lo tengo en el array: [1000 - 2000]
        // [1000 - 2000]  EL 10 ME QUEDO FEO, PERO LO MOVI PARA QUE SEA MAS CLARO
        // [0123456789 10]
        let text = this.precios[i].substring(6, 11);  // el segundo numero no es incluido (11)
        n = Number(text);
      }
    }
    return n;
  }

  // funcion para poner los productos en su manera natural
  reset() {
    this.jElegidos = [];
    this.elegido = false;
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

  // filtrarPorRequisito(requi: string): void {
  //   console.log(requi);
  //   console.log(this.juegoRecibido);

  //   this.elegido = true;
  //   this.jElegidos = []
  //   this.llenarJuegosElegidos("requisito", requi);
  //   this.juegoRecibido.map((juego, index) => {
  //     juego[index].requisitos.toLowerCase() === requi.toLowerCase() ? this.jElegidos.push(juego[index]) : null;
  //   })
  //   console.log(this.jElegidos);
  //   // this.jElegidos.push(juego[index])
  // }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.textoEnBuscar();
  }

  ngOnDestroy() {
    this.elegido = false;
    this.textoBuscar = "";
  }

}
