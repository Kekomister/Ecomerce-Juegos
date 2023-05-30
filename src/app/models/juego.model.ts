export class Juego {
  imagenes: string[] = [];
  nombre: string | undefined;
  descripcion: string | undefined;
  precio: string | undefined;
  consolas: string[] = [];
  genero: string[] = [];
  anioRelease: number;
  requisitos: string | undefined;
    
  constructor(
    imgs: string[],
    nom: string,
    desc: string,
    pcio: string,
    consolas: string[],
    genero: string[],
    anio: number,
    requisitos: string
  ) {
    this.imagenes = imgs;
    this.nombre = nom;
    this.descripcion = desc;
    this.precio = pcio;
    this.consolas = consolas;
    this.genero = genero;
    this.anioRelease = anio;
    this.requisitos = requisitos
  }
}
