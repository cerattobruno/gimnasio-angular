import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service'
import { AsistenciaSocioModel } from '../../../models/asistenciaSocio.model';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  asistencia: any[] = [];

  socio: any = {};
  actividad: any = {};
  loading: boolean;

  socios: any[] = [];


  constructor( private djangoService: DjangoService) {
     this.getAsistenciaSocio();
  }

  ngOnInit() {
    this.djangoService.checktoken();

  }

  /*
  getAsistencias = () => {
    this.djangoService.getAsistenciaSocios().subscribe(
      data => {
        this.empleados = data['results'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  */
  getAsistenciaSocio = () => {
    this.djangoService.getAsistenciaSocios().subscribe(
      data => {
        this.asistencia = data['results'];
        this.ultimoIngreso(this.asistencia[this.asistencia.length - 1].socio);
        console.log(this.asistencia);
      },
      error => {
        console.log(error);
      }
    );
  }

  getSocio = (socio) => {
    this.djangoService.getSocio(socio).subscribe(
      data => {
        this.socio = data;
        this.loading = false;
        // this.socios.push(data);
        // console.log(this.socios);
        // this.getActividad(this.socio.actividad);
        console.log(this.socio);
      });
  }


  ultimoIngreso(idSocio: any) {
    return this.getSocio(idSocio);
  }

  getActividad = (actividad) => {
    this.djangoService.getActividad(actividad).subscribe(
      data => {
        this.actividad = data;
        this.loading = false;
      });
  }
}
