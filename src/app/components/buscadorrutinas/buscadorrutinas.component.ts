import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-buscadorrutinas',
  templateUrl: './buscadorrutinas.component.html',
  styleUrls: ['./buscadorrutinas.component.css']
})
export class BuscadorrutinasComponent implements OnInit {

  encontrado: boolean;
  socios: any[] = [];

  dniSocio: any;
  socio: any = {};

  rutinas: any[] = [];
  rutinasSocio: any[] = [];

  ejercicios: any[] = [];
  rutinaXejercicios: any[] = [];

  noRutinas: boolean;

  constructor( private django: DjangoService) {
    this.encontrado = false;
    this.getSocios();
    this.getRutinas();
    this.getEjercicios();
    // this.getRutinaXEjercicios();
   }

  ngOnInit() {
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getRutinas = () => {
    this.django.getRutinas().subscribe(
      data => {
        this.rutinas = data['results'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getEjercicios = () => {
    this.django.getEjercicios().subscribe(
      data => {
        this.ejercicios = data['results'];
        console.log('Ejercicios', data);
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
  getRutinaXEjercicios = () => {
    this.django.getRutinaXEjercicios().subscribe(
      data => {
        this.rutinaXejercicios = data['results'];
        console.log('Ejercicios', data);
      },
      error => {
        console.log(error);
      }
    );
  }
  */
  
  buscarSocio() {
    console.log(this.dniSocio);
    this.limpiarPantalla();

    let i = 0;
    for (i = 0; i < this.socios.length; i++ ) {
        // console.log('dniSocio:', this.dniSocio);
        // console.log('Socios[i].dni', this.socios[i].dni);
        if (this.dniSocio == (this.socios[i].dni)) {
          this.socio = this.socios[i];
          this.matchearRutinasConSocio();
          this.encontrado = true;
          console.log(this.socio);
        }
    }

    /*
    if (!this.encontrado) {
      this.errormessage = 'Usted no es socio del Gimnasio!';
      // console.log('sale por el else tmb');
    }
    */
  }


  matchearRutinasConSocio() {
    let i = 0;
    for (i; i < this.rutinas.length; i++) {
      if ( this.socio.id === this.rutinas[i].socio ) {
        this.rutinasSocio.push(this.rutinas[i]);
        this.noRutinas = false;
      } else {
        this.noRutinas = true;
      }
    }
    console.log(this.rutinasSocio);
  }

  matchearRutinasDelSocioConEjercicios( idRutina: number) {
    let i = 0;
    for (i; i < this.rutinasSocio[idRutina].ejercicios.length; i++) {
    }
  }


  limpiarPantalla() {
    this.socio = {} ;
    this.rutinasSocio = [] ;
  }
}
