import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-sacarturno',
  templateUrl: './sacarturno.component.html',
  styleUrls: ['./sacarturno.component.css']
})
export class SacarturnoComponent implements OnInit {

  encontrado: boolean;

  socios: any[] = [];
  actividades: any[] = [];
  horarios: any[] = [];

  socio: any = {};
  dniSocio: any;
  actividadesSocio: any[] = [];

  constructor(private django: DjangoService) {
    this.encontrado = false;
    this.getSocios();
    this.getActividades();
    this.getHorarios();
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

  getActividades = () => {
    this.django.getActividades().subscribe(
      data => {
        this.actividades = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getHorarios = () => {
    this.django.getHorarios().subscribe(
      data => {
        this.horarios = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


  buscarSocio() {
    // console.log(this.dniSocio);

    let i = 0;
    for (i = 0; i < this.socios.length; i++ ) {
      // console.log('dniSocio:', this.dniSocio);
      // console.log('Socios[i].dni', this.socios[i].dni);
      if (this.dniSocio == (this.socios[i].dni)) {
        this.socio = this.socios[i];
        this.buscarActividades();
        this.encontrado = true;
        // console.log(this.socio);
      }
    }
  }

  buscarActividades() {
    // console.log(this.socio.actividades);
    // console.log(this.actividades);
    let i = 0;
    for (i = 0; i < this.socio.actividades.length; i++ ) {
      let j = 0;
      for (j = 0; j < this.actividades.length; j++) {
        if (this.socio.actividades[i] == this.actividades[j].id) {
          this.actividadesSocio.push(this.actividades[j]);
          // console.log(this.actividades[j]);
          console.log('act del Socio:', this.actividadesSocio);
        }
      }
    }
  }

}
