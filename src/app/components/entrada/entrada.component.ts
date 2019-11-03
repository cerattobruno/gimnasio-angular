import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  errormessage: string;

  asistencia: any[] = [];

  socio: any = {};
  actividad: any = {};
  loading: boolean;

  socios: any[] = [];

  dejarPasar = true;

  hora: Date;

  dniSocio: string;
  encontrado = false;
  messagecuota: string;
  inicio = true;

  /*
  asistente = {
    idSocio: number,
    fecha: Date,
    hora: Date,
  };
  */


  constructor( private django: DjangoService) {
    this.hora = new Date();
    this.getSocios();
  }

  ngOnInit() {
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data['results'];
        // console.log(data.results[3]);
        // console.log(this.socios[3].dni);
      },
      error => {
        console.log(error);
      }
    );
  }

  /*
  getSocio = (socio) => {
    this.django.getSocio(socio).subscribe(
      data => {
        this.socio = data;
        this.loading = false;
        // this.socios = data;
        // this.socios.push( data );
        console.log(this.socio);
        this.controlEntrada();
        this.nuevaAsistencia();
      });
  }
  */

  controlEntrada() {
    // console.log('hola soy el control de entrada');
    if (this.socio.saldo === true) {
      this.dejarPasar = true;
      this.inicio = false;
    } else {
      this.dejarPasar = false;
      this.messagecuota = 'Recuerde abonar su cuota en los proximos días!';
    }

    // this.nuevaAsistencia();
  }

  nuevaAsistencia() {
    /*
    this.asistente = {
      idSocio = this.socio.id,
      fecha = new Date(),
      hora = new Date(),
    };
    */
    // this.socio.actividades.push(this.prueba);
    this.django.crearAsisteciaSocio(this.socio).subscribe(
       data => {
         // this.getEmpleados();
         console.log('Data: ', data);
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

  controlar() {
    // console.log(this.socios.length);
    let i = 0;
    for (i = 0; i < this.socios.length; i++ ) {
      // console.log('dniSocio:', this.dniSocio);
      // console.log('Socios[i].dni', this.socios[i].dni);
      if (this.dniSocio == (this.socios[i].dni)) {
        this.socio = this.socios[i];
        this.controlEntrada();
        this.encontrado = true;
        console.log(this.socios[i]);
      }
    }

    if (!this.encontrado) {
      this.errormessage = 'Usted no es socio del Gimnasio!';
      // console.log('sale por el else tmb');
    }
  }



}
