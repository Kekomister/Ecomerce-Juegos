import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdJuegosService {

  juegos: any = [
    {
      id: 1,
      nombre: 'Cyberpunk 2077',
      descripcion: 'Descripción A',
      precio: 5200,
      consolas: ['PS4', 'PC', 'PS5'],
      genero: ['Acción', 'Aventura', 'Arcade'],
      anioRelease: 2020,
      imagenes: ['assets/Cyber Punk.jpg'],
      requisitos: "Alto"
    },
    {
      id: 2,
      nombre: 'Batman',
      descripcion: 'Descripción B',
      precio: 3500,
      consolas: ['PC', 'Xbox'],
      genero: ['RPG', 'Estrategia', 'Simulación'],
      anioRelease: 2015,
      imagenes: ['assets/Batman.jpg'],
      requisitos: "Medio"
    },
    {
      id: 3,
      nombre: 'Minecraft',
      descripcion: 'Descripción C',
      precio: 1200,
      consolas: ['XboxOne', 'Switch', 'PC'],
      genero: ['Terror', 'Deportivo'],
      anioRelease: 2011,
      imagenes: ['assets/Minecraft.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 4,
      nombre: 'Fortnite',
      descripcion: 'Descripción D',
      precio: 1000,
      consolas: ['PC', 'XboxOne', 'Xbox', 'Switch'],
      genero: ['Acción', 'Terror', 'Aventura'],
      anioRelease: 2017,
      imagenes: ['assets/Fortnine.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 5,
      nombre: 'Call of Duty: Warzone',
      descripcion: 'Descripción E',
      precio: 4860,
      consolas: ['XboxOne', 'PC', 'PS4'],
      genero: ['Arcade', 'Estrategia', 'RPG'],
      anioRelease: 2020,
      imagenes: ['assets/Call of Duty Warzone.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 6,
      nombre: 'Grand Theft Auto V',
      descripcion: 'Descripción F',
      precio: 4000,
      consolas: ['PS4', 'PS3', 'PS5', 'PC', 'XboxOne'],
      genero: ['Simulación', 'Musical', 'Aventura'],
      anioRelease: 2013,
      imagenes: ['assets/GTA V.jpg'],
      requisitos: "Medio"
    },
    {
      id: 7,
      nombre: 'The Witcher 3: Wild Hunt',
      descripcion: 'Descripción G',
      precio: 4000,
      consolas: ['PC', 'Switch', 'XboxOne'],
      genero: ['Deportivo', 'Arcade', 'Terror'],
      anioRelease: 2015,
      imagenes: ['assets/The Witcher 3.jpg'],
      requisitos: "Alto"
    },
    {
      id: 8,
      nombre: 'Super Mario Odyssey',
      descripcion: 'Descripción H',
      precio: 5800,
      consolas: ['Switch'],
      genero: ['Simulación', 'Estrategia', 'Acción'],
      anioRelease: 2017,
      imagenes: ['assets/Super Mario.jpg'],
      requisitos: "Alto"
    },
    {
      id: 9,
      nombre: "Assassin's Creed Valhalla",
      descripcion: 'Descripción I',
      precio: 2700,
      consolas: ['PC', 'XboxOne', 'Xbox', 'PS5'],
      genero: ['Aventura', 'Arcade', 'Musical'],
      anioRelease: 2020,
      imagenes: ["assets/Assasin'S.jpg"],
      requisitos: "Alto"
    },
    {
      id: 10,
      nombre: 'Halo Infinite',
      descripcion: 'Descripción J',
      precio: 3421,
      consolas: ['XboxOne', 'PC', 'Xbox'],
      genero: ['Terror', 'RPG', 'Simulación'],
      anioRelease: 2021,
      imagenes: ['assets/Halo.jpg'],
      requisitos: "Alto"
    },
    {
      id: 11,
      nombre: 'God of War (2018)',
      descripcion: 'Descripción K',
      precio: 4900,
      consolas: ['PS4'],
      genero: ['Acción', 'Estrategia', 'Deportivo'],
      anioRelease: 2018,
      imagenes: ['assets/God of War.jpg'],
      requisitos: "Medio"
    },
    {
      id: 12,
      nombre: 'FIFA 22',
      descripcion: 'Descripción L',
      precio: 2980,
      consolas: ['PC', 'XboxOne', 'Xbox', 'PS4', 'PS5', 'Switch'],
      genero: ['Musical', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: ['assets/FIFA 22.jpg'],
      requisitos: "Alto"
    },
    {
      id: 13,
      nombre: 'Resident Evil Village',
      descripcion: 'Descripción M',
      precio: 1000,
      consolas: ['PS4', 'XboxOne', 'Xbox', 'Switch'],
      genero: ['Arcade', 'Simulación', 'RPG'],
      anioRelease: 2021,
      imagenes: ['assets/Resident.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 14,
      nombre: 'Ghost of Tsushima',
      descripcion: 'Descripción N',
      precio: 3800,
      consolas: ['PS4', 'PS5'],
      genero: ['Estrategia', 'Acción', 'Musical'],
      anioRelease: 2020,
      imagenes: ['assets/Tsushima.jpg'],
      requisitos: "Medio"
    },
    {
      id: 15,
      nombre: 'Ratchet & Clank: Rift Apart',
      descripcion: 'Descripción O',
      precio: 2900,
      consolas: ['PS5', 'PC'],
      genero: ['Deportivo', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: ['assets/Ratcher.jpg'],
      requisitos: "Medio"
    },
    {
      id: 16,
      nombre: 'Animal Crossing: New Horizons',
      descripcion: 'Descripción P',
      precio: 5220,
      consolas: ['Switch'],
      genero: ['Terror', 'RPG', 'Estrategia'],
      anioRelease: 2020,
      imagenes: ['assets/Animals.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 17,
      nombre: "Marvel's Spider-Man: Miles Morales",
      descripcion: 'Descripción Q',
      precio: 4000,
      consolas: ['PC', 'PS5', 'PS4'],
      genero: ['Acción', 'Simulación', 'Musical'],
      anioRelease: 2020,
      imagenes: ['assets/Spiderman.jpg'],
      requisitos: "Alto"
    },
    {
      id: 18,
      nombre: 'Horizon Zero Dawn',
      descripcion: 'Descripción R',
      precio: 5780,
      consolas: ['PS4', 'PC'],
      genero: ['Arcade', 'Estrategia', 'Terror'],
      anioRelease: 2017,
      imagenes: ['assets/Horizon.jpg'],
      requisitos: "Alto"
    },
    {
      id: 19,
      nombre: 'Borderlands 3',
      descripcion: 'Descripción S',
      precio: 1670,
      consolas: ['PC', 'Xbox', 'PS4', 'PS5', 'XboxOne'],
      genero: ['RPG', 'Aventura', 'Deportivo'],
      anioRelease: 2019,
      imagenes: ['assets/Borderlands.jpg'],
      requisitos: "Bajo"
    },
    {
      id: 20,
      nombre: 'Elden Ring',
      descripcion: 'Descripción T',
      precio: 6000,
      consolas: ['PS4', 'PC', 'PS5', 'XboxOne'],
      genero: ['Acción', 'Simulación', 'Musical'],
      anioRelease: 2022,
      imagenes: ['assets/Elden.jpg'],
      requisitos: "Alto"
    },
  ];

  contenedorJuegos: any[] = this.juegos;
  newCarrito: any = [];
  constructor() { }

  getJuegos(): any[] {
    return this.contenedorJuegos;
  }

  restaurarJuegos(){
    this.contenedorJuegos = this.juegos;
  }

  getCarrito(): any[] {
    return this.newCarrito;
  }

  filtrarJuegosPor(caracteristica: string, opt: string): any[] {
    this.contenedorJuegos = []

    switch (caracteristica) {

      case "genero":
        for (let i = 0; i < this.juegos.length; i++) {
          for (let j = 0; j < this.juegos[i].genero.length; j++) {
            if (this.juegos[i].genero[j] == opt) {
              this.contenedorJuegos.push(this.juegos[i]);
            }
          }
        }
        break;

      case "consola":
        for (let i = 0; i < this.juegos.length; i++) {
          for (let j = 0; j < this.juegos[i].consolas.length; j++) {
            if (this.juegos[i].consolas[j] == opt) {
              this.contenedorJuegos.push(this.juegos[i]);
            }
          }
        }
        break;

      case "precio":
        let inicio = this.rangoInicio(opt);
        let fin = this.rangoFin(opt);

        for (let i = 0; i < this.juegos.length; i++) {
          let precio = Number(this.juegos[i].precio);
          if (precio >= inicio && precio <= fin) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      case "anio":
        for (let i = 0; i < this.juegos.length; i++) {
          if (this.juegos[i].anioRelease == opt) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      case "requisito":
        for (let i = 0; i < this.juegos.length; i++) {
          if (this.juegos[i].requisitos?.toLocaleLowerCase() == opt) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      case "busqueda":
        for (let i = 0; i < this.juegos.length; i++) {
          if (this.juegos[i].nombre?.toLowerCase().includes(opt.toLowerCase())) {
            this.contenedorJuegos.push(this.juegos[i]);
          }
        }
        break;

      default:
        alert("NO DEBERIA ENTRAR AQUI");
        break;
    }
    return this.contenedorJuegos;
  }

  private rangoInicio(p: string): number {
    let n = 0;
    let precios = ["1000 - 2000", "2000 - 3000", "3000 - 4000", "4000 - 5000", "5000 - 6000"];

    for (let i = 0; i < precios.length; i++) {
      if (precios[i] == p) {
        // el formato que lo tengo en el array:
        // [1000 - 2000]  EL 10 ME QUEDo FEO, PERO LO MOVI PARA QUE SEA MAS CLARO
        // [0123456789 10]
        let text = precios[i].substring(0, 5); // el segundo numero no es incluido (5)
        n = Number(text);
      }
    }
    return n;
  }

  private rangoFin(p: string): number {
    let n = 0;
    let precios = ["1000 - 2000", "2000 - 3000", "3000 - 4000", "4000 - 5000", "5000 - 6000"];

    for (let i = 0; i < precios.length; i++) {
      if (precios[i] == p) {
        // el formato que lo tengo en el array: [1000 - 2000]
        // [1000 - 2000]  EL 10 ME QUEDO FEO, PERO LO MOVI PARA QUE SEA MAS CLARO
        // [0123456789 10]
        let text = precios[i].substring(6, 11);  // el segundo numero no es incluido (11)
        n = Number(text);
      }
    }
    return n;
  }

  agregarJuegoCarrito(j: any): void {
    let yaEsta = false;
    if (this.newCarrito.length == 0) {
      this.newCarrito.push({
        nombre: j.nombre,
        precio: j.precio,
        cantidad: 1
      });
    } else {
      for (let i = 0; i < this.newCarrito.length && !yaEsta; i++) {
        if (this.newCarrito[i].nombre === j.nombre) {
          this.newCarrito[i].cantidad += 1;
          this.newCarrito[i].precio += j.precio;
          yaEsta = true;
        }
      }
      if (!yaEsta) {
        this.newCarrito.push({
          nombre: j.nombre,
          precio: j.precio,
          cantidad: 1
        });
      }
    }
  }

}
