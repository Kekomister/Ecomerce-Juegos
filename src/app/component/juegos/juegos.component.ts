import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
      precio: 82,
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

  verDetalle(j : Juego){
    this.router.navigate(['/detalle',j.nombre]);
  }

  mostrar(juego:any){
    console.log(juego.nombre);
  }

  ngOnInit(){
    // envio el array de juegos al que lo llame
    this.envioJuegos.emit(this.juegos);
  }

  comprar(){
    console.log("W");
    
  }
  constructor(private router : Router){}
}
