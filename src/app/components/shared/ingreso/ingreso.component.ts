import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from '../../../services/django.service';
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

  constructor( private djangoService: DjangoService) {
     this.getAsistenciaSocio();
  }

  ngOnInit() {
    this.djangoService.checktoken();

  }

  getAsistenciaSocio = () => {
    this.djangoService.getAsistenciaSocios().subscribe(
      data => {
        this.asistencia = data['results'];
        // console.log(data);
        console.log(this.asistencia);
        this.ultimoIngreso(this.asistencia[this.asistencia.length - 1].socio);
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
        console.log(this.socio);
        this.getActividad(this.socio.actividad);
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
        console.log(this.actividad);
      });
  }
}
