import { Component, OnInit } from '@angular/core';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  imagenes:any = {
    uno: 'assets/bannerDos.png',
    dos: 'assets/banner.jpg',
    tres: 'assets/bannerTres.jpg'
  }
  misJuegos: any = []

  constructor(private bdJuegos: BdJuegosService){}


  ngOnInit(): void {
    this.misJuegos = this.bdJuegos.getJuegos()
  }
}
