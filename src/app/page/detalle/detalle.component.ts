import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  reciboJuegos(js : Juego[]){
    for(let i = 0; i < js.length; i++){
      if(js[i].nombre == this.nombre){
        this.juego = js[i];
      }
    }
  }

  constructor(private route: ActivatedRoute) { };

  ngOnInit() {
    // para recibir nombre al moverse de pagina hacia esta (detalle)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('value');
      this.nombre = String(id);
    })
  }
}
