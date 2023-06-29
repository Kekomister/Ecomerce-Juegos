import { Component, OnInit } from '@angular/core';
import { BdJuegosService } from 'src/app/Services/bd-juegos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styleUrls: ['./ver-compra.component.css'],
})
export class VerCompraComponent implements OnInit {
  itemsCarro: any[];
  titulosItems: string[] = ['Nombre', 'Cantidad', 'Precio Total', 'Eliminar'];
  total: number = 0;
  mostrarPasos = {
    pasoUno: true,
    pasoDos: false,
    pasoTres: false,
  };
  medioDePago: string = '';
  cantidadDeCuotas: string = '';

  numTarjeta: number;
  name: string;
  fechaVencimiento: string;
  dorso: number;

  constructor(private bd: BdJuegosService) {}

  eliminar(indice: number, item: any) {
    let resta = item.precio / item.cantidad;
    this.bd.sacarJuegoCarrito(indice, item);

    this.total = this.total - resta;
  }

  next(num: number): void {
    switch (num) {
      case 2:
        this.mostrarPasos.pasoUno = false;
        this.mostrarPasos.pasoDos = true;
        break;
      case 3:
        this.mostrarPasos.pasoUno = true;
        this.mostrarPasos.pasoDos = false;
        console.log(this.medioDePago);

        break;
      case 4:
        if (this.medioDePago === 'credito') {
          if (this.cantidadDeCuotas.length > 0) {
            this.mostrarPasos.pasoDos = false;
            this.mostrarPasos.pasoTres = true;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Debe seleccionar la cantidad de cuotas para poder contiuar!',
            });
          }
        } else if (this.medioDePago === 'efectivo') {
          this.mostrarPasos.pasoDos = false;
          this.mostrarPasos.pasoTres = true;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe seleccionar un metodo de pago para poder contiuar!',
          });
        }
        break;
      case 5:
        this.mostrarPasos.pasoTres = false;
        this.mostrarPasos.pasoDos = true;
        break;
      case 6:
        if (this.medioDePago === 'efectivo') {
          Swal.fire({
            title: 'Gracias por elegir comprar con nosotros!.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://blog.digimind.com/hs-fs/hubfs/Imported_Blog_Media/giphy-202.gif?width=500&height=375&name=giphy-202.gif")
                left top
                no-repeat
              `,
          });
        }else{
          if (
            this.numTarjeta > 0 &&
            this.name.length > 0 &&
            this.fechaVencimiento.length > 0 &&
            this.dorso > 0
          ) {
            Swal.fire({
              title: 'Gracias por elegir comprar con nosotros!.',
              width: 600,
              padding: '3em',
              color: '#716add',
              background: '#fff url(/images/trees.png)',
              backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://blog.digimind.com/hs-fs/hubfs/Imported_Blog_Media/giphy-202.gif?width=500&height=375&name=giphy-202.gif")
                  left top
                  no-repeat
                `,
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Debe completar todos los datos para finalizar!',
            });
          }
        }
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
    this.itemsCarro = this.bd.getCarrito();
    console.log(this.itemsCarro);

    for (let i = 0; i < this.itemsCarro.length; i++) {
      this.total += this.itemsCarro[i].precio;
    }
  }
}

