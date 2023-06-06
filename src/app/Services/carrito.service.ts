import { Injectable } from '@angular/core';
import { Juego } from '../models/juego.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito : Juego[] = [];

  constructor() { }

  
  public getCarrito() : Juego[] {
    return this.carrito;
  }
  
  
  public AgregarItem(j : Juego) {
    this.carrito.push(j);
  }
  
}
