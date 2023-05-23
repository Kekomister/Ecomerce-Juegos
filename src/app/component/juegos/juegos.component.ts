import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { Juego } from 'src/app/models/juego.model';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css'],
})
export class JuegosComponent {
  @Output() envioJuegos : EventEmitter<Juego[]> = new EventEmitter<Juego[]>();
  @Input() indiceRecorrido: number = 6;

  // variable que guarda todos los juegos que cumplan la condicion elegida en la opcion izquierda
  @Input() juegosElegidos: Juego[] = [];

  juegos: any = [
    {
      id: 1,
      nombre: 'Cyberpunk 2077',
      descripcion: 'Descripción A',
      precio: 5000,
      consolas: ['PS4', 'PC'],
      genero: ['Acción', 'Aventura', 'Arcade'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 2,
      nombre: 'Batman',
      descripcion: 'Descripción B',
      precio: 3500,
      consolas: ['PC', 'Xbox', 'Wii'],
      genero: ['RPG', 'Estrategia', 'Simulación'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 3,
      nombre: 'Minecraft',
      descripcion: 'Descripción C',
      precio: 87,
      consolas: ['XboxOne', 'PS4', 'PC'],
      genero: ['Terror', 'Deportivo', 'Simulación'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 4,
      nombre: 'Fortnite',
      descripcion: 'Descripción D',
      precio: 12,
      consolas: ['PC', 'XboxOne', 'Wii', 'Xbox'],
      genero: ['Acción', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 5,
      nombre: 'Call of Duty: Warzone',
      descripcion: 'Descripción E',
      precio: 71,
      consolas: ['Xbox', 'Wii'],
      genero: ['Arcade', 'Estrategia', 'RPG'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 6,
      nombre: 'Grand Theft Auto V',
      descripcion: 'Descripción F',
      precio: 18,
      consolas: ['PS4', 'PC', 'XboxOne', 'Wii'],
      genero: ['Simulación', 'Musical', 'Aventura'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 7,
      nombre: 'The Witcher 3: Wild Hunt',
      descripcion: 'Descripción G',
      precio: 93,
      consolas: ['PC', 'Xbox', 'XboxOne'],
      genero: ['Deportivo', 'Arcade', 'Terror'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 8,
      nombre: 'Super Mario Odyssey',
      descripcion: 'Descripción H',
      precio: 7,
      consolas: ['PS4', 'XboxOne', 'Wii'],
      genero: ['Simulación', 'Estrategia', 'Acción'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 9,
      nombre: "Assassin's Creed Valhalla",
      descripcion: 'Descripción I',
      precio: 63,
      consolas: ['PC', 'XboxOne', 'Xbox', 'Wii'],
      genero: ['Aventura', 'Arcade', 'Musical'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 10,
      nombre: 'Halo Infinite',
      descripcion: 'Descripción J',
      precio: 41,
      consolas: ['PS4', 'PC', 'Xbox'],
      genero: ['Terror', 'RPG', 'Simulación'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 11,
      nombre: 'God of War (2018)',
      descripcion: 'Descripción K',
      precio: 28,
      consolas: ['XboxOne', 'Wii'],
      genero: ['Acción', 'Estrategia', 'Deportivo'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 12,
      nombre: 'FIFA 22',
      descripcion: 'Descripción L',
      precio: 82,
      consolas: ['PC', 'XboxOne', 'Wii'],
      genero: ['Musical', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 13,
      nombre: 'Resident Evil Village',
      descripcion: 'Descripción M',
      precio: 9,
      consolas: ['PS4', 'XboxOne', 'Xbox'],
      genero: ['Arcade', 'Simulación', 'RPG'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 14,
      nombre: 'Ghost of Tsushima',
      descripcion: 'Descripción N',
      precio: 76,
      consolas: ['PC', 'Xbox', 'Wii'],
      genero: ['Estrategia', 'Acción', 'Musical'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 15,
      nombre: 'Ratchet & Clank: Rift Apart',
      descripcion: 'Descripción O',
      precio: 34,
      consolas: ['PS4', 'PC', 'XboxOne'],
      genero: ['Deportivo', 'Terror', 'Aventura'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 16,
      nombre: 'Animal Crossing: New Horizons',
      descripcion: 'Descripción P',
      precio: 66,
      consolas: ['XboxOne', 'Xbox'],
      genero: ['Terror', 'RPG', 'Estrategia'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 17,
      nombre: "Marvel's Spider-Man: Miles Morales",
      descripcion: 'Descripción Q',
      precio: 23,
      consolas: ['PC', 'XboxOne', 'Wii'],
      genero: ['Acción', 'Simulación', 'Musical'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 18,
      nombre: 'Horizon Zero Dawn',
      descripcion: 'Descripción R',
      precio: 88,
      consolas: ['PS4', 'Xbox', 'XboxOne'],
      genero: ['Arcade', 'Estrategia', 'Terror'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 19,
      nombre: 'Borderlands 3',
      descripcion: 'Descripción S',
      precio: 15,
      consolas: ['PC', 'Xbox'],
      genero: ['RPG', 'Aventura', 'Deportivo'],
      anioRelease: 2021,
      imagenes: [],
    },
    {
      id: 20,
      nombre: 'Elden Ring',
      descripcion: 'Descripción T',
      precio: 79,
      consolas: ['PS4', 'PC', 'Wii'],
      genero: ['Acción', 'Simulación', 'Musical'],
      anioRelease: 2021,
      imagenes: [],
    },
  ];

  mostrar(juego:any){
    console.log(juego.nombre);
  }

  ngOnInit(){
    this.envioJuegos.emit(this.juegos);
  }
}
